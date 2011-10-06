package org.example.reportincident;

import org.apache.camel.*;
import org.apache.camel.builder.RouteBuilder;
import org.apache.camel.component.cxf.common.message.CxfConstants;
import org.apache.camel.component.mock.MockEndpoint;
import org.apache.camel.example.reportincident.InputReportIncident;
import org.apache.camel.example.reportincident.OutputReportIncident;
import org.apache.camel.impl.DefaultExchange;
import org.apache.camel.model.RouteDefinition;
import org.apache.camel.test.junit4.CamelSpringTestSupport;
import org.junit.Test;
import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * Unit test of our routes
 */
public class ReportIncidentRoutesClientTest extends CamelSpringTestSupport {

    @Produce(uri = "direct:toWs")
    protected ProducerTemplate template;

    @EndpointInject(uri = "mock:result")
    protected MockEndpoint resultEndpoint;


    @Test
    public void testRendportIncident() throws Exception {

        // create input parameter
        InputReportIncident input = new InputReportIncident();
        input.setIncidentId("123");
        input.setIncidentDate("2008-08-18");
        input.setGivenName("Claus");
        input.setFamilyName("Ibsen");
        input.setSummary("Bla");
        input.setDetails("Bla bla");
        input.setEmail("davsclaus@apache.org");
        input.setPhone("0045 2962 7576");

        Exchange senderExchange = new DefaultExchange(context, ExchangePattern.InOut);
        senderExchange.getIn().setBody(input);
        senderExchange.getIn().setHeader(CxfConstants.OPERATION_NAME, "ReportIncident");
        resultEndpoint.expectedMessagesMatches(new Predicate() {
            public boolean matches(Exchange exchange) {
                return ((OutputReportIncident)exchange.getIn().getBody()).getCode().equals("ok");
            }
        });

        template.send(senderExchange);
        resultEndpoint.assertIsSatisfied();

    }

    private OutputReportIncident outputReportIncidentWithCode(String code) {
        OutputReportIncident outputReportIncident = new OutputReportIncident();
        outputReportIncident.setCode(code);
        return outputReportIncident;
    }

    @Override
    protected AbstractApplicationContext createApplicationContext() {
        return new ClassPathXmlApplicationContext(new String[]{"camel-context.xml"});
    }

    @Override
    protected RouteBuilder createRouteBuilder() throws Exception {
         return new RouteBuilder(){
             @Override
             public void configure() throws Exception {
                  from("direct:wsResponse").to("mock:result");
             }
         };
    }
}
