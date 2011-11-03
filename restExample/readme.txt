uses blueprint instead of spring

features:addurl mvn:org.apache.cxf.karaf/apache-cxf/2.4.3/xml/features
features:install cxf

feature:install camel-blueprint

provisioning:
features:addurl mvn:camel/restExample/1.0.0/xml/features
features:install restExample

 org.apache.camel.example.reportincident.Incident

 http://localhost:8084/CxfRsRouterTest/rest/incidents/ GET-> not allowed 405
 http://localhost:8084/incidents/123 GET -> 404

http://localhost:8084/CxfRsRouterTest/rest/incidents


RestClient.get "http://localhost:8084/CxfRsRouterTest/rest/incidents/"