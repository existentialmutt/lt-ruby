module FromHash
  def from_hash(ops)
    ops.each do |k,v|
      send("#{k}=",v)
    end
    self
  end
  def initialize(ops={})
    from_hash(ops)
  end
end

module HandleSpecs
  class Run
    include FromHash
    attr_accessor :eval_id, :args, :client

    def temp_file_name
      @temp_file_name ||= "#{File.dirname(args['path'])}/tmp_lt_spec.rb"
    end

    def create_temp_file!
      File.open(temp_file_name,"w") do |f|
        f << args['code']
      end
    end
    def remove_temp_file!
      `rm #{temp_file_name}`
    end

    def json_result
      @json_result ||= begin
        create_temp_file!

        cmd = "rspec #{temp_file_name} -f j"
        client.run_shell(cmd)
      ensure
        remove_temp_file!
      end
    end

    def result
      @result ||= Result.new(:json_result => json_result, :client => client, :eval_id => eval_id)
    end
  end

  class Result
    include FromHash
    attr_accessor :json_result, :client, :eval_id
    def result
      @result ||= JSON.parse(json_result)
    end

    def examples
      @examples ||= result['examples'].map do |ex|
        Example.new(ex.merge(:result => self))
      end
    end

    def send_responses!
      examples.each { |x| x.send_response! }

      result_hash = {"result" => result["summary_line"], "meta" => {"start" => 0, "end" => 0}}
      client.send_response eval_id, "editor.eval.ruby.result", result_hash
    end

  end

  class Example
    include FromHash
    attr_accessor :description, :full_description, :status, :file_path, :line_number, :exception
    attr_accessor :result
    def client; result.client; end

    def passed?
      status == 'passed'
    end
    def result_key
      passed? ? 'result' : 'ex'
    end
    def message_name
      passed? ? "editor.eval.ruby.result" : "editor.eval.ruby.exception"
    end

    def result_hash
      {result_key => message, "meta" => {"start" => line_number-1, "end" => line_number-1}}
    end

    def message
      if passed?
        status
      else
        "#{status}: #{exception['message']}"
      end
    end

    def send_response!
      client.send_response result.eval_id, message_name, result_hash
    end
  end

  class SpecPlugin
    def handle?(cmd,args)
      res = (cmd == "editor.eval.ruby") && (args['name'] =~ /_spec\.rb$/)
      !!res
    end
    def handle(id,cmd,args,client)
      run = HandleSpecs::Run.new(:client => client, :eval_id => id, :args => args)
      run.result.send_responses!
    end

    LtRuby::Plugin.register self
  end
end
