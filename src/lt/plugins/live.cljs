(ns lt.objs.langs.ruby.live
  (:require [lt.objs.command :as cmd]
            [lt.object :as object]
            [lt.objs.editor :as ed]
            [lt.objs.eval :as eval]
            [lt.util.dom :as dom])

  (:require-macros [lt.macros :refer [behavior defui]]))

;; test if we increased the length of the doc by 1 and have a blank for the last line
(behavior ::eval-on-change
          :triggers #{:change}
          :debounce 300
          :reaction (fn [editor _cm delta]
                      (let [
                            doc (ed/get-doc editor)
                            new-lc (ed/last-line editor)
                            last-line (ed/line editor new-lc)

                            old-lc (or (::line-count @editor)
                                       (do (object/merge! editor {::line-count 0})
                                           (::line-count @editor)))]
                        (when (and (.test #"^\s*$" last-line)
                                 (= 1 (- new-lc old-lc)))
                              (let [code (ed/line editor (- new-lc 1))
                                    line (- new-lc 1)
                                    info (-> (:info @editor)
                                             (assoc :code code)
                                             (assoc :meta {:start line  :end line}))]
                                (when (and (not (empty? code))
                                           (not (.test #"^\s*$" code)))
                                  (object/raise ruby :eval! {:origin editor :info info}))))
                        (object/merge! editor {::line-count new-lc}))))

(defui live-toggler [this]
  [:div#instarepl [:span {:class (bound this #(str "livetoggler " (when-not (:live %) "off")))} "live"]]
  :click (fn [e]
           (dom/prevent e)
           (object/raise (:editor @this) :live.toggle!)))

(object/object* ::live-toggler
                :tags #{::live-toggler}
                :name "Live Mode Toggler"
                :live true
                :init (fn [this editor]
                        (object/merge! this {:editor editor})
;;                         (dom/prepend (object/->content editor) (live-toggler this))
;;                         (let [frame (dom/parent (object/->content editor))
;;                               editor-content (dom/remove (object/->content editor))
;;                               wrapped-toggler (dom/append (live-toggler this))]
;;                           (dom/append wrapped-toggler editor-content))
                        (let [editor-content (object/->content editor)
                              frame (dom/parent editor-content)
                              toggler (live-toggler this)]
                          (dom/append toggler editor-content)
                          (dom/append frame toggler)
                          )
                        ))



(defn live-off [editor]
  (object/remove-tags editor [:editor.ruby.live])
  (when-let [toggler (::live-toggler @editor)] (object/merge! toggler {:live false})))

(defn live-on [editor]
  ;; connect if necessary
  (eval/get-client! {:command :editor.eval.ruby
                     :origin editor
                     :info (:info @editor)
                     :create try-connect})
;;   ;; add the toggle button if necessary
  (when-not (::live-toggler @editor)
    (object/merge! editor {::live-toggler (object/create ::live-toggler editor)}))
  (object/add-tags editor [:editor.ruby.live])
  (object/merge! (::live-toggler @editor) {:live true})
  )

(behavior ::live-toggle
          :triggers #{:live.toggle!}
          :reaction (fn [editor]
                      (if (object/has-tag? editor :editor.ruby.live)
                          (live-off editor)
                          (live-on editor))
                      (ed/focus editor)))



(cmd/command {:command :instarepl.ruby.toggle-live
                  :desc "Ruby Instarepl: Toggle live mode"
                  :exec (fn []
                          (when-let [ed (pool/last-active)]
                            (object/raise ed :live.toggle!)
                            ))})
