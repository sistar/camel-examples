Feature: Place order
  As a Digital Publisher
  In order to be able to offer a book on my Publishing Plattform
  I want to order the scanning of the book by a Digitizing Provider

Scenario: place an order
  Given I am a valid API user
  And I use the payloadID "1079645778@yourdomain.com"
  And I send and accept XML
  And I give the order an orderID "XYZ-001"
  And I add an item with lineNumeber "1" and quantity "1" to the order
  And I set the Supplier EAN "1234567890123" for line item "1"
  When I send a POST request to "/orders" with the following:
  Then the response should be "200"
  And the XML response should be a cXML with payloadID "1079645778@yourdomain.com" and status code "200"
