(ns lt.objs.langs.ruby.config
  (:require [lt.object :as object]
            [lt.objs.langs.ruby :as ruby :refer [ruby]])

  (:require-macros [lt.macros :refer [behavior]]))

(behavior :lt.objs.langs.ruby/ruby-exe
                  :triggers #{:object.instant}
                  :desc "Ruby: Set the path to the ruby executable for clients"
                  :type :user
                  :params [{:label "path"
                            :type :path}]
                  :exclusive true
                  :reaction (fn [this exe]
                              (object/merge! ruby {:lt.objs.langs.ruby.client/ruby-exe exe})))


(behavior :lt.objs.langs.ruby/use-rvm
            :triggers #{:object.instant}
            :desc "Ruby: Use RVM when loading REPL"
            :type :user
            :exclusive true
            :reaction (fn [this]
                        (object/merge! ruby {:lt.objs.langs.ruby.client/use-rvm? true})))


(behavior :lt.objs.langs.ruby/rvm-path
            :triggers #{:object.instant}
            :desc "Ruby: Path to RVM init script"
            :type :user
            :params [{:label "path", :type :path}]
            :exclusive true
            :reaction (fn [this path]
                        (object/merge! ruby {:lt.objs.langs.ruby.client/rvm-path path})))

(behavior :lt.objs.langs.ruby/use-rbenv
            :triggers #{:object.instant}
            :desc "Ruby: Use rbenv when loading REPL"
            :type :user
            :exclusive true
            :reaction (fn [this]
                        (object/merge! ruby {:lt.objs.langs.ruby.client/use-rbenv? true})))

(behavior :lt.objs.langs.ruby/client-enable-logging
            :triggers #{:object.instant}
            :desc "Ruby: log ruby client output to lt_client.log"
            :type :user
            :exclusive true
            :reaction (fn [this]
                        (object/merge! ruby {:lt.objs.langs.ruby.client/enable-client-logging? true})))
