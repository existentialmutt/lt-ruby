(ns lt.objs.langs.ruby.client
  (:require [lt.object :as object]
            [lt.objs.command :as cmd]
            [lt.objs.files :as files]
            [lt.objs.popup :as popup]
            [lt.objs.plugins :as plugins]
            [lt.objs.proc :as proc]
            [lt.objs.clients :as clients]
            [lt.objs.notifos :as notifos]
            [lt.util.load :as load]
            [lt.objs.sidebar.clients :as scl]
            [lt.objs.dialogs :as dialogs]
            [lt.objs.clients.tcp :as tcp]

            [lt.objs.langs.ruby :as ruby :refer [ruby]])
  (:require-macros [lt.macros :refer [behavior]]))

(def plugin-dir (plugins/find-plugin "Ruby Instarepl"))
(def shell (load/node-module "shelljs"))
(def rb-path (files/join plugin-dir "rb-src/lt_client.rb"))
(def runner-path (files/join plugin-dir "rb-src/lt_client_runner.sh"))

(behavior ::on-out
                  :triggers #{:proc.out}
                  :reaction (fn [this data]
                              (let [out (.toString data)]
                                (object/update! this [:buffer] str out)
                                (if (> (.indexOf out "Connected") -1)
                                    (do
                                      (notifos/done-working)
                                      (object/merge! this {:connected true}))
                                    (object/update! this [:buffer] str data)))))

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

(defn bash-escape-spaces [s]
  (clojure.string/replace s " " "\\ "))

(defn run-rb [{:keys [path project-path name client] :as info}]
  (let [n (notifos/working "Connecting..")
        obj (object/create ::connecting-notifier client)
        use-runner (or (::use-rvm? @ruby) (::use-rbenv? @ruby))
        keys->env {::use-rbenv? :LT_USE_RBENV, ::use-rvm? :LT_USE_RVM, ::enable-client-logging? :LT_ENABLE_CLIENT_LOGGING}
        env (zipmap (map keys->env
                         (keys (select-keys @ruby (keys keys->env))))
                    (cycle [true]))
        env (if (::rvm-path @ruby) (assoc env :LT_RVM_PATH (::rvm-path @ruby)) env)
        command (if use-runner
                    "bash"
                    (or (::ruby-exe @ruby) "ruby"))
        args (if use-runner
                 [runner-path project-path (bash-escape-spaces rb-path) tcp/port (clients/->id client)]
                 [(escape-spaces rb-path) tcp/port (clients/->id client)])]
    (proc/exec {:command command
                :args args
                :cwd project-path
                :env env
                :obj obj})))

(defn check-ruby [obj]
  (assoc obj :ruby (or (::ruby-exe @ruby)
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
        (assoc obj :project-path
                   (if (files/dir? p) p (files/parent p)))
        (if (and (files/dir? cur)
                 (files/exists? (files/join cur "Gemfile")))
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

(behavior ::connect
                  :triggers #{:connect}
                  :reaction (fn [this path]
                              (try-connect {:info {:path path}})))

(defn check-all [obj]
  (-> obj
      (check-ruby)
      (check-client)
      (find-project)
      (notify)))

(defn try-connect [{:keys [info]}]
  (let [path (:path info)
        client (clients/client! :ruby.client)]
    (check-all {:path path
                :client client})
    client))

(scl/add-connector {:name "Ruby"
                    :desc "Select a directory to serve as the root of your ruby project."
                    :connect (fn []
                               (dialogs/dir ruby :connect))})
