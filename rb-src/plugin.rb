module LtRuby
  class Plugins
    def plugins
      @plugins ||= []
    end
    include Enumerable
    def each(&b)
      plugins.each(&b)
    end
    def register(plugin)
      self.plugins << plugin.new
    end

    def invoke(method,*args)
      plugins.each do |plugin|
        plugin.send(method,*args) if plugin.respond_to?(method)
      end
    end
  end

  class Plugin
    class << self
      def plugins
        @plugins ||= Plugins.new
      end

      def method_missing(sym,*args,&b)
        plugins.send(sym,*args,&b)
      end

      def setup_user_plugins!(plugin_str)
        plugin_str.split(",").each do |x|
          logger.debug "loading plugin #{x}"
          require x
        end
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
