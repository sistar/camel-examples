World(Rack::Test::Methods)
require 'erubis'
Given /^I am a valid API user$/ do
  @user = Factory(:user)
  authorize(@user.email, @user.password)
end

Given /^I send and accept XML$/ do
  header 'Accept', 'text/xml'
  header 'Content-Type', 'text/xml'
end

Given /^I send and accept JSON$/ do
  header 'Accept', 'application/json'
  header 'Content-Type', 'application/json'
end

Given /^I use the payloadID "([^\"]*)"$/ do |payloadId|
  @order[:payloadId] = payloadId
end

Given /^I give the order an orderID "([^\"]*)"$/ do |orderID|
  @order[:orderID] = orderID
end

When /^I add an item with lineNumeber "([^\"]*)" and quantity "([^\"]*)" to the order$/ do  |lineNumber,quantity|
  @order[:items][lineNumber] = {:lineNumber => lineNumber, :quantity => quantity}
end

When /^I set the Supplier EAN "([^\"]*)" for line item "([^\"]*)"$/ do |lineNumber,ean|
  @order[:items][lineNumber][:ean] = ean
end

When /^I send a GET request for "([^\"]*)"$/ do |path|
  get path
end

When /^I send a POST request to "([^\"]*)" with my order:$/ do |path|
    t_lineItem =
  <<-EOH

EOH

  t_global =
  <<-EOH

   EOH
  @order[:items].each do |item|

  end
  body =
  post path, body
end

When /^I send a PUT request to "([^\"]*)" with the following:$/ do |path, body|
  put path, body
end

When /^I send a DELETE request to "([^\"]*)"$/ do |path|
  delete path
end

Then /^the response should be "([^\"]*)"$/ do |status|
  last_response.status.should == status.to_i
end

Then /^the XML response should be a "([^\"]*)" array with (\d+) "([^\"]*)" elements$/ do |tag, number_of_children, child_tag|
  page = Nokogiri::XML(last_response.body)
  page.xpath("//#{tag}/#{child_tag}").length.should == number_of_children.to_i
end

Then /^the JSON response should be an array with (\d+) "([^\"]*)" elements$/ do |number_of_children, name|
  page = JSON.parse(last_response.body)
  page.map { |d| d[name] }.length.should == number_of_children.to_i
end
Then /^the XML response should be a cXML with payloadID "([^\"]*)" and status code "([^\"]*) and text "([^\"]*) "$/ do |payloadID,code,text|
  page = Nokogiri::XML(last_response.body)
  response = Hash.from_xml(last_response.body)
  input = File.read('order_response.erb')
  eruby = Erubis::Eruby.new(input) # create Eruby object
  xml_output =  eruby.result(binding())        # get result

  expected = Hash.from_xml(xml_output)
  expected.diff(response).should == {}
end