module LtRuby
  class Plugins
    fattr(:plugins) { [] }
    include Enumerable
    def each(&b)
      plugins.each(&b)
    end
    def register(plugin)
      self.plugins << plugin
    end

    def invoke(method,*args)
      plugins.each do |plugin|
        plugin.send(method,*args) if plugin.respond_to?(method)
      end
    end
  end

  class Plugin
    class << self
      fattr(:plugins) { Plugins.new }
      def method_missing(sym,*args,&b)
        plugins.send(sym,*args,&b)
      end
    end
  end

  module PluginMod
    def invoke_plugin(method)
      LtRuby::Plugin.invoke(method,:client => self)
    end
    def dispatch_to_plugin(id,cmd,args)
      plugin = LtRuby::Plugin.plugins.find { |x| x.handle?(cmd,args) }
      if plugin
        plugin.handle(id,cmd,args,self)
        true
      else
        false
      end
    end
  end
end
