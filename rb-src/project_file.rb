module ProjectFile
  class ProjectFilePlugin
    def handle?(cmd,args)
      res = (cmd == "editor.eval.ruby") && (args['name'] =~ /_spec\.rb$/)
      !!res
    end
    def handle(id,cmd,args,client)
      run = HandleSpecs::Run.new(:client => client, :eval_id => id, :args => args)
      run.result.send_responses!
    end

    def connection_completed(*args)
      load_project_file! FileUtils.pwd
    end

    def load_project_file!(dir)
      file = "#{dir}/.lighttable"
      load(file) if FileTest.exist?(file)
    rescue => exp
      #logger.error "Error loading project file #{file}: #{exp.message}"
    end

    LtRuby::Plugin.register self
  end
end
