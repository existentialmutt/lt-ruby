(ns lt.objs.langs.ruby.watch
  (:require-macros [lt.macros :refer [behavior]]))

(defn ruby-watch [meta src]
  (let [meta-str (str "%q(" (js/JSON.stringify (clj->js meta)) ")")]
    (str "LtWatch.watch(" src ", JSON.parse(" meta-str "))")))


(behavior ::watch-src
                  :triggers #{:watch.src+}
                  :reaction (fn [editor cur meta src]
                              (ruby-watch meta src)))
(behavior ::ruby-watch
                  :triggers #{:editor.eval.ruby.watch}
                  :reaction (fn [editor res]
                              (when-let [watch (get (:watches @editor) (-> res :meta :id))]
                                (let [str-result (:result res)]
                                  (object/raise (:inline-result watch) :update! str-result)))))
