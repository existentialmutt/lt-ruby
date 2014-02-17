(ns lt.objs.langs.ruby.eval
  (:require [lt.object :as object]
            [lt.objs.editor :as ed]
            [lt.objs.eval :as eval]
            [lt.plugins.watches :as watches]
            [lt.objs.clients :as clients]
            [lt.objs.notifos :as notifos]
            [lt.objs.console :as console]
            [lt.objs.files :as files]

            [lt.objs.langs.ruby :as ruby :refer [ruby]]
            [lt.objs.langs.ruby.client :as client])

  (:require-macros [lt.macros :refer [behavior]]))

(behavior ::on-eval
                  :triggers #{:eval}
                  :reaction (fn [editor]
                              (object/raise ruby :eval! {:origin editor
                                                             :info (assoc (@editor :info)
                                                                     :code (watches/watched-range editor nil nil lt.objs.langs.ruby.watch/ruby-watch)
                                                                     :meta {:start 0, :end (ed/last-line editor)})})))

(behavior ::on-eval.one
                  :triggers #{:eval.one}
                  :reaction (fn [editor]
                              (let [pos (ed/->cursor editor)
                                    code (if (ed/selection? editor)
                                             (watches/watched-range editor nil nil lt.objs.langs.ruby.watch/ruby-watch)
                                             (ed/line editor (:line pos)))
                                    info (:info @editor)
                                    info (if (ed/selection? editor)
                                           (assoc info
                                             :code (ed/selection editor)
                                             :meta {:start (-> (ed/->cursor editor "start") :line)
                                                    :end (-> (ed/->cursor editor "end") :line)})
                                           (assoc info :pos pos :code code :meta {:start (:line pos) :end (:line pos)}))]
                                (object/raise ruby :eval! {:origin editor
                                                             :info info}))))

(behavior ::eval!
                  :triggers #{:eval!}
                  :reaction (fn [this event]
                              (let [{:keys [info origin]} event
                                    client (-> @origin :client :default)]
                                (notifos/working "")
                                (clients/send (eval/get-client! {:command :editor.eval.ruby
                                                                 :origin origin
                                                                 :info info
                                                                 :create client/try-connect})
                                              :editor.eval.ruby
                                              info
                                              :only
                                              origin))))

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

(behavior ::ruby-incomplete
                  :triggers #{:editor.eval.ruby.incomplete}
                  :reaction (fn [editor res]
                              (notifos/done-working)
                              (object/raise editor :editor.result "…" {:line (-> res :meta :end)
                                                                       :start-line (-> res :meta :start)})))

(behavior ::ruby-exception
                  :triggers #{:editor.eval.ruby.exception}
                  :reaction (fn [editor ex]
                              (notifos/done-working)
                              (object/raise editor :editor.exception (:ex ex) {:line (-> ex :meta :end)
                                                                               :start-line (-> ex :meta :start)})
                              ))

(behavior ::ruby-printer
                  :triggers #{:editor.eval.ruby.print}
                  :reaction (fn [editor p]
                              (console/loc-log {:file (files/basename (:file p))
                                                :line "stdout"
                                                :content (:msg p)})))


