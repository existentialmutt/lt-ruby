module ProjectFile
  class ProjectFilePlugin
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
