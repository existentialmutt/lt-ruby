(ns lt.objs.langs.ruby.image
  (:require [lt.object :as object])

  (:require-macros [lt.macros :refer [behavior defui]]))

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
