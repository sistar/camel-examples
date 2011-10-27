package org.apache.camel.example;

import org.apache.camel.*;
import org.apache.camel.component.cxf.common.message.CxfConstants;
import org.apache.camel.example.reportincident.Incident;
import org.apache.camel.impl.DefaultExchange;
import org.junit.Test;
import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * Unit test of our routes
 */
public class ReportIncidentRoutesClientTest extends org.apache.camel.test.CamelSpringTestSupport {
    @EndpointInject(uri = "cxfrs://bean://rsClient")
    Endpoint cxfClient;
    @Produce(uri = "cxfrs://bean://rsClient")
    protected ProducerTemplate template;

    @Test
    public void testRendportIncident() throws Exception {
        String id = "123";
        String path = "/incidents"+"/"+id;
        Class<Incident> aClass = Incident.class;
        Exchange exchange = get(cxfClient, path, aClass);

        template.send(exchange);

        Incident inputReportIncident = (Incident) exchange.getOut().getBody();
        assertEquals("123", inputReportIncident.getIncidentId());

    }

    public Exchange get(Endpoint endpoint, String path, Class<?> aClass) {
        return call(endpoint,"GET", path, aClass, null);
    }

    public static Exchange call(Endpoint endpoint,String method, String path, Class<?> aClass, Object body) {
        Exchange exchange = new DefaultExchange(endpoint);
        exchange.setPattern(ExchangePattern.InOut);
        Message inMessage = exchange.getIn();
        inMessage.setHeader(CxfConstants.CAMEL_CXF_RS_USING_HTTP_API, Boolean.TRUE);
        inMessage.setHeader(Exchange.HTTP_METHOD, method);
        inMessage.setHeader(Exchange.HTTP_PATH, path);   //relative path
        inMessage.setHeader(CxfConstants.CAMEL_CXF_RS_RESPONSE_CLASS, aClass);
        inMessage.setBody(body);
        return exchange;
    }


    @Override
    protected AbstractApplicationContext createApplicationContext() {
        return new ClassPathXmlApplicationContext(new String[]{"META-INF/spring/camel-context.xml"});
    }
}
