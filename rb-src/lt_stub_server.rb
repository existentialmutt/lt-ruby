require 'rubygems'
gem 'eventmachine'
require 'eventmachine'
gem 'json'
require 'json'

class LtStubServer < EM::Connection

  def post_init
    puts "Client Connected.  Sending LT-like Json"
    send_data JSON.generate(["editor.eval.ruby", '["Hi",  "Mom!"].join(" ")'])
  end

  def receive_data(data)
    puts "The Response is ..."
    puts data
  end
end

EM.run do
  EM.start_server '127.0.0.1', 2013, LtStubServer
end

