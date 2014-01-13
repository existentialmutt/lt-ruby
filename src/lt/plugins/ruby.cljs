(ns lt.objs.langs.ruby
  (:require [lt.object :as object]
            [lt.objs.eval :as eval]
            [lt.objs.console :as console]
            [lt.objs.command :as cmd]
            [lt.objs.clients.tcp :as tcp]
            [lt.objs.sidebar.clients :as scl]
            [lt.objs.dialogs :as dialogs]
            [lt.objs.files :as files]
            [lt.objs.popup :as popup]
            [lt.objs.platform :as platform]
            [lt.objs.editor :as ed]
            [lt.objs.plugins :as plugins]
            [lt.plugins.watches :as watches]
            [lt.objs.proc :as proc]
            [clojure.string :as string]
            [lt.objs.clients :as clients]
            [lt.objs.notifos :as notifos]
            [lt.util.load :as load]
            [lt.util.cljs :refer [js->clj]])
  (:require-macros [lt.macros :refer [behavior defui]]))

;;****************************************************
;; Proc
;;****************************************************

(def shell (load/node-module "shelljs"))
(def rb-path (files/join plugins/*plugin-dir* "rb-src/lt_client.rb"))

(behavior ::on-out
                  :triggers #{:proc.out}
                  :reaction (fn [this data]
                              (let [out (.toString data)]
                                (object/update! this [:buffer] str out)
                                (when (> (.indexOf out "Connected") -1)
                                  (do
                                    (notifos/done-working)
                                    (object/merge! this {:connected true})
                                    ;(object/destroy! this)
                                    )))))

(behavior ::on-error
                  :triggers #{:proc.error}
                  :reaction (fn [this data]
                              (let [out (.toString data)]
                                (when-not (> (.indexOf (:buffer @this) "Connected") -1)
                                  (object/update! this [:buffer] str data)
                                  ))
                              ))

(behavior ::on-exit
                  :triggers #{:proc.exit}
                  :reaction (fn [this data]
                              ;(object/update! this [:buffer] str data)
                              (when-not (:connected @this)
                                (notifos/done-working)
                                (popup/popup! {:header "We couldn't connect."
                                               :body [:span "Looks like there was an issue trying to connect
                                                      to the project. Here's what we got:" [:pre (:buffer @this)]]
                                               :buttons [{:label "close"}]})
                                (clients/rem! (:client @this)))
                              (proc/kill-all (:procs @this))
                              (object/destroy! this)
                              ))

(object/object* ::connecting-notifier
                :triggers []
                :behaviors [::on-exit ::on-error ::on-out]
                :init (fn [this client]
                        (object/merge! this {:client client :buffer ""})
                        nil))

(defn escape-spaces [s]
  (if (= files/separator "\\")
    (str "\"" s "\"")
    s))


(defn run-rb [{:keys [path project-path name client] :as info}]
  (let [n (notifos/working "Connecting..")
        obj (object/create ::connecting-notifier client)
        env {}]
    (proc/exec {:command (or (:ruby-exe @ruby) "ruby")
                :args [(escape-spaces rb-path) tcp/port (clients/->id client)]
                :cwd project-path
                :env env
                :obj obj})))




(defn check-ruby [obj]
  (assoc obj :ruby (or (:ruby-exe @ruby)
                         (.which shell "ruby"))))

(defn check-client [obj]
  (assoc obj :ruby-client (files/exists? rb-path)))

(defn find-project [obj]
  (let [p (:path obj)
        roots (files/get-roots)]
    (loop [cur p
           prev ""]
      (if (or (empty? cur)
              (roots cur)
              (= cur prev))
        (assoc obj :project-path nil)
        (if (and (not (files/exists? (files/join cur "Gemfile")))
                 (files/dir? cur))
          (assoc obj :project-path cur)
          (recur (files/parent cur) cur))))))

(defn notify [obj]
  (let [{:keys [ruby project-path path ruby-client client]} obj]
    (cond
     (or (not ruby) (empty? ruby)) (do
                                         (clients/rem! client)
                                         (notifos/done-working)
                                         (popup/popup! {:header "We couldn't find Ruby."
                                                      :body "In order to evaluate in Ruby files, a Ruby interpreter has to be installed and on your system PATH."
                                                      :buttons [{:label "Download Ruby"
                                                                 :action (fn []
                                                                           (platform/open "https://www.ruby-lang.org/en/downloads/"))}
                                                                {:label "ok"}]}))
     (not project-path) (do
                          (clients/rem! client)
                          (notifos/done-working)
                          (popup/popup! {:header "We couldn't find this file."
                                       :body "In order to evaluate in Ruby files, the file has to be on disk somewhere."
                                       :buttons [{:label "Save this file"
                                                  :action (fn []
                                                            (cmd/exec! :save)
                                                            (try-connect obj))}
                                                 {:label "Cancel"
                                                  :action (fn []
                                                            )}]}))
     :else (run-rb obj))
    obj))

(defn check-all [obj]
  (-> obj
      (check-ruby)
      (check-client)
      (find-project)
      (notify)))

;;****************************************************
;; Eval
;;****************************************************

(defn try-connect [{:keys [info]}]
  (let [path (:path info)
        client (clients/client! :ruby.client)]
    (check-all {:path path
                :client client})
    client))

(defn ruby-watch [meta src]
  (let [meta (js/JSON.stringify (clj->js meta))]
    ;; FIXME
    (str "sys.modules['lttools'].__dict__['watch'](" src ", " meta ")")))

(behavior ::watch-src
                  :triggers #{:watch.src+}
                  :reaction (fn [editor cur meta src]
                              (console/log "calling in the watch!")
                              (ruby-watch meta src)))

(behavior ::on-eval
                  :triggers #{:eval}
                  :reaction (fn [editor]
                              (object/raise ruby :eval! {:origin editor
                                                             :info (assoc (@editor :info)
                                                                     :code (watches/watched-range editor nil nil ruby-watch))})))

(behavior ::on-eval.one
                  :triggers #{:eval.one}
                  :reaction (fn [editor]
                              (let [code (watches/watched-range editor nil nil ruby-watch)
                                    pos (ed/->cursor editor)
                                    info (:info @editor)
                                    info (if (ed/selection? editor)
                                           (assoc info
                                             :code (ed/selection editor)
                                             :meta {:start (-> (ed/->cursor editor "start") :line)
                                                    :end (-> (ed/->cursor editor "end") :line)})
                                           (assoc info :pos pos :code code))]
                                (object/raise ruby :eval! {:origin editor
                                                             :info info}))))

(behavior ::ruby-watch
                  :triggers #{:editor.eval.ruby.watch}
                  :reaction (fn [editor res]
                              (when-let [watch (get (:watches @editor) (-> res :meta :id))]
                                (let [str-result (:result res)]
                                  (object/raise (:inline-result watch) :update! str-result)))))

(behavior ::ruby-result
                  :triggers #{:editor.eval.ruby.result}
                  :reaction (fn [editor res]
                              (notifos/done-working)
                              (object/raise editor :editor.result (:result res) {:line (:end (:meta res))
                                                                                 :start-line (-> res :meta :start)})))

(behavior ::ruby-success
                  :triggers #{:editor.eval.ruby.success}
                  :reaction (fn [editor res]
                              (notifos/done-working)
                              (object/raise editor :editor.result "✓" {:line (-> res :meta :end)
                                                                       :start-line (-> res :meta :start)})))

(behavior ::ruby-exception
                  :triggers #{:editor.eval.ruby.exception}
                  :reaction (fn [editor ex]
                              (notifos/done-working)
                              (object/raise editor :editor.exception (:ex ex) {:line (-> ex :meta :end)
                                                                               :start-line (-> ex :meta :start)})
                              ))

(defui image [src]
  [:img {:src (str "data:image/png;base64," src)}])

(defui canvas []
  [:canvas])

(behavior ::ruby-image
                  :triggers #{:editor.eval.ruby.image}
                  :reaction (fn [editor img]
                              ;(console/log (pr-str img))
                              (object/raise editor :editor.result.underline (image (:image img)) {:line (-> img :meta :end)
                                                                                                  :start-line (-> img :meta :start)})
                              ))

(behavior ::ruby-printer
                  :triggers #{:editor.eval.ruby.print}
                  :reaction (fn [editor p]
                              (console/loc-log {:file (files/basename (:file p))
                                                :line "stdout"
                                                :content (:msg p)})))

(behavior ::eval!
                  :triggers #{:eval!}
                  :reaction (fn [this event]
                              (let [{:keys [info origin]} event
                                    client (-> @origin :client :default)]
                                (notifos/working "")
                                (clients/send (eval/get-client! {:command :editor.eval.ruby
                                                                 :origin origin
                                                                 :info info
                                                                 :create try-connect})
                                              :editor.eval.ruby
                                              info
                                              :only
                                              origin))))

(behavior ::connect
                  :triggers #{:connect}
                  :reaction (fn [this path]
                              (try-connect {:info {:path path}})))


(object/object* ::ruby-lang
                :tags #{:ruby.lang})

(def ruby (object/create ::ruby-lang))

(scl/add-connector {:name "Ruby"
                    :desc "Select a directory to serve as the root of your ruby project."
                    :connect (fn []
                               (dialogs/dir ruby :connect))})

(behavior ::ruby-exe
                  :triggers #{:object.instant}
                  :desc "Ruby: Set the path to the ruby executable for clients"
                  :type :user
                  :params [{:label "path"
                            :type :path}]
                  :exclusive true
                  :reaction (fn [this exe]
                              (object/merge! ruby {:ruby-exe exe})))
