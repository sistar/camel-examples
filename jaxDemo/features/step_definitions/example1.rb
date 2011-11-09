require 'erubis'

puts "---------- result ----------"
class Myorder
  def initialize()
    @order = {}
    @order['payloadId'] = 012
    @order[:orderID] = 123
    @order[:items] = {}
    @order[:items][1] = {:lineNumber => 1, :quantity => 1}
    @order[:items][1][:ean] = 12345678900
  end

  def s()
    input = File.read('order_request.erb')
    eruby = Erubis::Eruby.new(input) # create Eruby object
    eruby.result(:order=>@order)        # get result

  end
end
mo = Myorder.new

puts mo.s()

