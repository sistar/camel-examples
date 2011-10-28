package org.example.reportincident;

import org.apache.camel.Exchange;
import org.apache.camel.Processor;
import org.apache.camel.builder.RouteBuilder;
import org.apache.camel.example.reportincident.OutputReportIncident;
import org.apache.cxf.message.MessageContentsList;


public class ReportIncidentClientRoutes extends RouteBuilder {

    private static final String URL_PART = "http://localhost:8182/cxf/camel-example-cxf-osgi/webservices/incident";
    public static final String SERVICE_CLASS = "org.apache.camel.example.reportincident.ReportIncidentEndpoint";

    @Override
    public void configure() throws Exception {
        from("direct:toWs").to("cxf://" + URL_PART + "?serviceClass=" + SERVICE_CLASS).process(new Processor() {
            public void process(Exchange exchange) throws Exception {
                MessageContentsList messageContentsList = (MessageContentsList) exchange.getIn().getBody();
                OutputReportIncident outputReportIncident = (OutputReportIncident) messageContentsList.get(0);
                log.info("status code: " + outputReportIncident.getCode());
                exchange.getIn().setBody(outputReportIncident);
            }
        }).to("direct:wsResponse");

    }
}
