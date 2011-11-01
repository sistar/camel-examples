package org.example.reportincident;

import org.apache.camel.Exchange;
import org.apache.camel.Processor;
import org.apache.camel.builder.RouteBuilder;
import org.apache.camel.example.reportincident.InputReportIncident;
import org.apache.camel.example.reportincident.OutputReportIncident;
import org.apache.cxf.message.MessageContentsList;

public class ReportIncidentClientRoutes extends RouteBuilder {

	private static final String URL_PART_A = "http://localhost:8181/cxf/camel-example-cxf-osgi/webservices/incident";
	private static final String URL_PART_B = "http://localhost:8182/cxf/camel-example-cxf-osgi/webservices/incident";
	public static final String SERVICE_CLASS = "org.apache.camel.example.reportincident.ReportIncidentEndpoint";

	@Override
	public void configure() throws Exception {

		Processor resultProcessor = new Processor() {
			public void process(Exchange exchange) throws Exception {
				MessageContentsList messageContentsList = (MessageContentsList) exchange
						.getIn().getBody();
				OutputReportIncident outputReportIncident = (OutputReportIncident) messageContentsList
						.get(0);
				log.info("status code: " + outputReportIncident.getCode());
				exchange.getIn().setHeader("statusCode",
						outputReportIncident.getCode());
				exchange.getIn().setBody(outputReportIncident);
				System.out.println("wasHERE");
			}
		};

		Processor requestProcessor = new Processor() {
			public void process(Exchange exchange) throws Exception {
				InputReportIncident inputReportIncident = (InputReportIncident) exchange
						.getIn().getBody();
				exchange.getIn().setHeader("partner",
						inputReportIncident.getSummary());
			}
		};
		from("direct:toWs").routeId("invocationDecision")
				.process(requestProcessor).choice()
				.when(header("partner").isEqualTo("partnerA"))
				.to("direct:partnerA")
				.when(header("partner").isEqualTo("partnerB"))
				.to("direct:partnerB");
		from("direct:partnerA").to(
				"cxf://" + URL_PART_A + "?serviceClass=" + SERVICE_CLASS).to(
				"direct:wsResponse");
		from("direct:partnerB").to(
				"cxf://" + URL_PART_B + "?serviceClass=" + SERVICE_CLASS).to(
				"direct:wsResponse");
		from("direct:wsResponse").routeId("resultDecision")
				.process(resultProcessor).choice()
				.when(header("statusCode").isEqualTo("ok"))
				.to("direct:statusOK")
				.when(header("statusCode").isEqualTo("notOK"))
				.to("direct:statusNotOK");
	}
}
