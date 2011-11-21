package org.apache.camel.example;

import org.apache.camel.*;
import org.apache.camel.example.reportincident.Incident;
import org.apache.camel.example.reportincident.OutputReportIncident;
import org.apache.camel.test.junit4.CamelSpringTestSupport;
import org.apache.cxf.jaxrs.client.ServerWebApplicationException;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * Integration test for Restful CRUD Webservice
 * Will bring up a CXF-RS Server
 */
public class ReportIncidentRestProxyRoutesClientTest extends CamelSpringTestSupport {

    @EndpointInject(uri = "cxfrs://bean://rsClient")
    Endpoint cxfRsClientEndpoint;

    @Produce(uri = "cxfrs://bean://rsClient")
    protected ProducerTemplate template;

    private final SampleIncidentProducer sampleIncidentProducer = new SampleIncidentProducer();
    RestClientHelper rch;

    @Before
    public void init(){
        this.rch = new RestClientHelper(template, cxfRsClientEndpoint);
    }

    @Test
    public void testThatIncidentIsStoredAndRetrieved() throws Exception {
        String id = "123";
        final String INCIDENTS = "/incidents/";

        Exchange exchange = rch.retrieveToExchangeOut(INCIDENTS + id, Incident.class);

        //expecting 404 NOT FOUND
        assertEquals(404, exchange.getException(ServerWebApplicationException.class).getStatus());

        storeIncident(sampleIncidentProducer.defaultIncident());

        exchange = rch.retrieveToExchangeOut(INCIDENTS + id, Incident.class);
        Incident incident = (Incident) exchange.getOut().getBody();
        assertEquals(id, incident.getIncidentId());


        exchange = rch.deleteToExchangeOut(INCIDENTS + id);
        assertEquals(id, incident.getIncidentId());


        exchange = rch.retrieveToExchangeOut(INCIDENTS + id, Incident.class, template, cxfRsClientEndpoint);
        //expecting 404 NOT FOUND
        assertEquals(404, exchange.getException(ServerWebApplicationException.class).getStatus());


    }

    private void storeIncident(Incident incident) throws Exception {
        Exchange exchange = rch.prepPut(cxfRsClientEndpoint, "/incidents", OutputReportIncident.class, incident);
        template.send(exchange);
    }

    @Override
    protected AbstractApplicationContext createApplicationContext() {
        return new ClassPathXmlApplicationContext(new String[]{"META-INF/spring/camel-context.xml",
                "META-INF/spring/jax-rs-server-context.xml"});
    }
}
