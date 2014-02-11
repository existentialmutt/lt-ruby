load File.dirname(__FILE__) + "/spec_helper.rb"

describe "basic" do
  it 'smoke' do
    2.should == 2
  end

  it 'create a client' do
    LtClient.new(nil).should be
  end
end

shared_context "eval" do
  let(:client) do
    LtClient.new(nil).tap do |res|
      res.eval_queue = ""
    end
  end

  def setup_response_mock(ops={})
    ops[:line] ||= 1
    args = {"result" => ops[:result].to_s, "meta" => {"start" => ops[:line], "end" => ops[:line]}}
    client.should_receive(:send_response).with(1,"editor.eval.ruby.result",args)
  end

  def eval_code(code, ops={})
    ops[:id] ||= 1
    client.eval_ruby ops[:id], 'code' => code
  end

  def eval_spec(code, ops={})
    ops[:id] ||= 1
    args = {'code' => code, 'name' => ops[:file], 'path' => (ops[:path]||ops[:file])}
    #client.eval_spec ops[:id],
    HandleSpecs::SpecPlugin.handle ops[:id], nil, args, client
  end
end

describe "eval" do
  include_context "eval"

  it 'one line eval' do
    setup_response_mock :result => 42
    eval_code "a = 42"
  end

  it 'two line eval' do
    setup_response_mock :result => 43, :line => 1
    eval_code "a = 42\na + 1"
  end

  it 'persistent eval' do
    setup_response_mock :result => 1
    setup_response_mock :result => 2
    eval_code "a = 1"
    eval_code "a + 1"
  end

  if true
    describe "spec file" do
      it 'basic' do
        mock_json = '{"examples": [], "summary_line":"1 examples, 0 failures"}'
        setup_response_mock :result => "1 examples, 0 failures", :line => 0
        client.should_receive(:run_shell).with("rspec /fun/tmp_lt_spec.rb -f j").and_return(mock_json)
        eval_spec "a = 42", :file => "main_spec.rb", :path => "/fun/main_spec.rb"
      end
    end
  end
end

describe "receive_data" do
  include_context "eval"

  def receive_data_defaults
    {"line-ending" => "\n", "type-name" => "Ruby", "mime" => "text/x-ruby", "tags" => ["editor.ruby"]}
  end

  def make_receive_data_last_arg(ops)
    set_defaults(ops)
    meta = {"start" => ops[:line], "end" => ops[:line]}
    receive_data_defaults.merge("name" => ops[:file], "path" => ops[:file], "code" => ops[:code], "meta" => meta)
  end

  def set_defaults(ops)
    ops[:line] ||= 0
    ops[:id] ||= 1
    ops[:file] ||= "main.rb"
  end

  def make_data(ops)
    set_defaults(ops)

    last = make_receive_data_last_arg(ops)
    res = [ops[:id], "editor.eval.ruby", last]
    JSON.generate(res)
  end

  it 'basic receive' do
    data = make_data :code => "a = 42"
    arg = make_receive_data_last_arg(:code => "a = 42")
    client.should_receive(:eval_ruby).with(1,arg)
    client.receive_data(data)
  end

  if true
    it 'receive spec file' do
      data = make_data :code => "a = 42", :file => "main_spec.rb"
      client.should_not_receive(:eval_ruby)
      HandleSpecs::SpecPlugin.should_receive(:handle)
      client.receive_data(data)
    end
  end
end
