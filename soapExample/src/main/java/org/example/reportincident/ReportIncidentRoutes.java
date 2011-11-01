package org.example.reportincident;

import org.apache.camel.Exchange;
import org.apache.camel.builder.RouteBuilder;
import org.apache.camel.example.reportincident.InputReportIncident;
import org.apache.camel.example.reportincident.OutputReportIncident;

public class ReportIncidentRoutes extends RouteBuilder {
	@Override
	public void configure() throws Exception {
		OutputReportIncident okay = new OutputReportIncident();
		okay.setCode("ok");
		OutputReportIncident notOkay = new OutputReportIncident();
		notOkay.setCode("notOK");
		// from("cxf:bean:reportIncidentA")
		// .convertBodyTo(InputReportIncident.class)
		// .setHeader(Exchange.FILE_NAME,
		// constant("request-${date:now:yyyy-MM-dd-HHmmssSSS}"))
		// .wireTap("file://target/inbox/")
		// .to("log:org.example?level=info").choice()
		// .when(simple("${body.givenName} == 'Claus'"))
		// .transform(constant(okay))
		// .log(LoggingLevel.INFO, "it is Claus").otherwise()
		// .transform(constant(notOkay))
		// .log(LoggingLevel.INFO, "someone else");

		from("cxf:bean:reportIncidentA")
				.convertBodyTo(InputReportIncident.class)
				.setHeader(Exchange.FILE_NAME,
						constant("request-${date:now:yyyy-MM-dd-HHmmssSSS}"))
				.wireTap("file://target/inbox/")
				.to("log:org.example?level=info").transform(constant(okay));
		from("cxf:bean:reportIncidentB")
				.convertBodyTo(InputReportIncident.class)
				.setHeader(Exchange.FILE_NAME,
						constant("request-${date:now:yyyy-MM-dd-HHmmssSSS}"))
				.wireTap("file://target/inbox/")
				.to("log:org.example?level=info").transform(constant(notOkay));
	}
}
