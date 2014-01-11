oldout = STDOUT
olderr = STDERR
stop = false
local = true
threads = []
current_client = 0

class Printer
  def initialize
    @cur = ""
  end


  def write(text)
    @cur += text
    if text == "\n"
      flush()
    end
  end

  def flush
    send(current_client, "editor.eval.ruby.print", :msg => @cur, :file => name)
  end

  def readlines; end
  def read; end
end

# TODO fix or remove
def asUnicode(s)
  s.to_s
end

def find_loc(body, line, total)
  (0...body.length).each do |i|
    if body[i].lineno == line
      if i + 1 >= body.length
        return {:start => body[i].lineno, :end => total}
      else
        return {:start => body[i].lineno, :end => body[i+1].lineno - 1}
      end
    elsif body[i].lineno > line && line != 0
      return {:start => body[i-1].lineno, :end => body[i].lineno - 1}
    elsif body[i].lineno < line && i + 1 == body.length && line <= total
      return {:start => body[i].lineno, :end => total}
    end
  end
  return nil
end


def handle_eval(data)
  result = nil
  code = data[2][:code] #clean_code?
  if data[2][:meta]
    loc = data[2][:meta]
  else
    loc = {:start => 1, :end => 1}
  end

  to_exec = []

  if data[2][:pos]
    begin
      toExec.push(handlePos(code, data[2][:pos]))
    rescue Exception => e
      return send(data[0], "editor.eval.ruby.exception", {:ex => e.backtrace, :meta => {:start => data[2][:pos][:line], :end => data[2][:pos][:line] }})
    end
  else
    begin
      exp = code
      if data[2][:meta]
        exp = "\n" * data[2][:meta][:start] + code 
      end
      to_exec = explode_code(exp)
  end
end

