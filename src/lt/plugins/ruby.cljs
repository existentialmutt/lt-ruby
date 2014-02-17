(ns lt.objs.langs.ruby
  (:require [lt.object :as object]))

(object/object* ::ruby-lang
                :tags #{:ruby.lang})

(def ruby (object/create ::ruby-lang))

