package org.apache.camel.example.itests;

import org.apache.camel.*;
import org.apache.camel.example.RestClientHelper;
import org.apache.camel.example.SampleIncidentProducer;
import org.apache.camel.example.reportincident.Incident;
import org.apache.camel.example.reportincident.OutputReportIncident;
import org.apache.cxf.jaxrs.client.ServerWebApplicationException;
import org.junit.Ignore;
import org.junit.Test;
import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * Unit test for Restful CRUD Webservice running on Karaf
 */
public class KarafClientIT extends org.apache.camel.test.CamelSpringTestSupport {

    @EndpointInject(uri = "cxfrs://bean://rsClient")
    Endpoint cxfClient;

    @Produce(uri = "cxfrs://bean://rsClient")
    protected ProducerTemplate template;

    private final SampleIncidentProducer sampleIncidentProducer = new SampleIncidentProducer();
    private final RestClientHelper restClientHelper = new RestClientHelper();


    @Test
    @Ignore
    public void testThatIncidentIsStoredAndRetrieved() throws Exception {
        String id = "123";
        final String INCIDENTS = "/incidents/";

        Exchange exchange = restClientHelper.retrieveToExchangeOut(INCIDENTS + id, Incident.class, template, cxfClient);

        //expecting 404 NOT FOUND
        assertEquals(404, exchange.getException(ServerWebApplicationException.class).getStatus());

        storeIncident(sampleIncidentProducer.defaultIncident());

        exchange = restClientHelper.retrieveToExchangeOut(INCIDENTS + id, Incident.class, template, cxfClient);
        Incident incident = (Incident) exchange.getOut().getBody();
        assertEquals(id, incident.getIncidentId());

    }

    private Exchange storeIncident(Incident incident) throws Exception {
        Exchange exchange = restClientHelper.prepPut(cxfClient, "/incidents", OutputReportIncident.class, incident);
        return restClientHelper.doCall(exchange, template);
    }

    private Exchange doCall(Exchange exchange, ProducerTemplate producerTemplate) throws Exception {
        return restClientHelper.doCall(exchange, producerTemplate);
    }

    private Exchange prepPut(Endpoint cxfRsClient, String path, Class<?> aClass, Object body) throws Exception {
        return restClientHelper.prepPut(cxfRsClient, path, aClass, body);
    }

    public Exchange prepGet(Endpoint cxfRsClient, String path, Class<?> aClass) throws Exception {
        return restClientHelper.prepGet(cxfRsClient, path, aClass);
    }

    private Exchange prepDelete(Endpoint cxfRsClient, String path) throws Exception {
        return restClientHelper.prepDelete(cxfRsClient, path);
    }


    @Override
    protected AbstractApplicationContext createApplicationContext() {
        return new ClassPathXmlApplicationContext(new String[]{"META-INF/spring/camel-context.xml"});
    }
}
