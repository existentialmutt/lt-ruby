require 'rubygems'
require "logger"
gem 'eventmachine'
require 'eventmachine'
gem 'json'
require 'json'
gem 'method_source'
require 'method_source'
require 'fileutils'

class NullLogger < Logger
  def initialize(*args)
  end

  def add(*args, &block)
  end
end


LOGFILE = "/code/orig/lt-ruby/lt_client3.log"
LOGGER_CLASS = (ENV['LT_ENABLE_CLIENT_LOGGING'] ? Logger : NullLogger)

logger = LOGGER_CLASS.new(LOGFILE)

load File.dirname(__FILE__) + "/plugin.rb"
load File.dirname(__FILE__) + "/handle_specs.rb"
load File.dirname(__FILE__) + "/project_file.rb"

logger.debug "Client started with command:"
logger.debug($0)
logger.debug(ARGV)

class LtClient < EM::Connection

  include MethodSource::CodeHelpers
  include LtRuby::PluginMod

  attr_accessor :currentId, :eval_queue

  def logger
    @_logger = LOGGER_CLASS.new(LOGFILE)
  end

  def post_init
    logger.debug("Client Initialized")
    self.class.active_client = self
  end

  def connection_completed
    logger.debug "Connection Established"
    client_info = JSON.generate({
      "name" => File.basename(FileUtils.pwd),
      "client-id" => ARGV[1].to_i,
      "dir" => FileUtils.pwd,
      "commands" => ["editor.eval.ruby"],
      "type" => "ruby"
    })
    send_data(client_info+"\n")
    logger.debug("Sent Client info")
    logger.debug(client_info)
    $stdout = LtPrinter.new(self)
    $stderr = LtPrinter.new(self)
    self.eval_queue = ""

    LtRuby::Plugin.setup_user_plugins!(ARGV[2])

    invoke_plugin(:connection_completed)

    logger.debug "done with connection_completed"
  end

  def dispatch(id,cmd,args)
    return if dispatch_to_plugin(id,cmd,args)
    dispatch_built_in(id,cmd,args)
  end

  def dispatch_built_in(id,cmd,args)
    case cmd
    when "editor.eval.ruby"
      eval_ruby(id, args)
    when "client.close"
      logger.debug("Disconnecting")
      close_connection
      exit(0)
    end
  end

  def receive_data(data)
    logger.debug "Received Data:"
    logger.debug data
    begin
      id, cmd, args = JSON.parse(data)
    rescue JSON::ParserError => e
      puts "JSON Parser Error"
    end

    if id
      self.currentId = id
    end

    # Dispatch on cmd
    if id && cmd
      dispatch(id,cmd,args)
    else
      logger.debug "Ignoring invalid input"
    end
  end

  def send_response(id, cmd, args)
    data = (JSON.generate([id, cmd, args]))
    logger.debug("Sending data:")
    logger.debug(data)
    send_data(data)
    send_data("\n")
  end

  def eval_ruby(id, args)
    eval_candidate = self.eval_queue + "\n" + args["code"]
    logger.debug "Eval Candidate #{eval_candidate}"
    if complete_expression?(eval_candidate)
      eval_args = [eval_candidate]
      if args["path"]
        eval_args << args["path"]
        if args["meta"] && args["meta"]["start"]
          eval_args << args["meta"]["start"] + 1
        end
      end

      result = TOPLEVEL_BINDING.eval(*eval_args)
      if result.nil?
        send_response(id, "editor.eval.ruby.success", {"meta" => response_meta(args["meta"])})
      else
        send_response(id, "editor.eval.ruby.result", {"result" => result.inspect, "meta" => response_meta(args["meta"])})
      end
      self.eval_queue = ""
    else
      self.eval_queue = eval_candidate
      logger.debug("Queued Code: #{self.eval_queue}")
      send_response(id, "editor.eval.ruby.incomplete", {"meta" => response_meta(args["meta"])})
    end

  rescue Exception => e
    exception_and_backtrace = [e.inspect, e.backtrace].flatten.join("\n")
    send_response(id, "editor.eval.ruby.exception", {"ex" => exception_and_backtrace, "meta" => response_meta(args["meta"])})
  end

  def run_shell(cmd)
    `#{cmd} 2>&1`
  end

  def response_meta(request_meta)
    result = request_meta || {}
    result["start"] ||= 1
    result["end"] ||= 1
    result
  end

  @@active_client = nil
  def self.active_client=(a)
    @@active_client = a
  end
  def self.active_client
    @@active_client
  end

end

class LtPrinter
  attr_accessor :client

  def initialize(client)
    @cur = ""
    self.client = client
  end

  def write(text)
    @cur += text
    if text == "\n"
      self.flush
    end
  end
  alias_method :print, :write

  def flush
    client.send_response(client.currentId, "editor.eval.ruby.print", {"msg" => @cur, "file" => File.basename(FileUtils.pwd)})
    @cur = ""
  end

  def self.safe_print(text)
    $stdout.write(text)
    $stdout.flush
  end

  def to_str
    "LtPrinter"
  end

  def puts(text)
    write(text)
    flush
  end
end

class LtWatch
  def self.watch(expr, meta)
    LtClient.active_client.send_response(nil, "clients.raise-on-object", [meta["obj"], "editor.eval.ruby.watch", {"meta" => meta, "result" => expr.inspect}]);
  end
end

def connect
  EM.run do
    EM.connect '127.0.0.1', ARGV[0].to_i, LtClient
    LtPrinter.safe_print "Connected\n"
  end
rescue => exp
  b = exp.backtrace.join("\n")
  logger.debug "ERROR: #{exp.message}\n#{b}"
  raise exp
end

unless defined?(RSpec)
  connect
end
