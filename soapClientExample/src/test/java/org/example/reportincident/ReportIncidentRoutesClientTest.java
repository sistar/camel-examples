package org.example.reportincident;

import static org.hamcrest.CoreMatchers.is;

import org.apache.camel.EndpointInject;
import org.apache.camel.Exchange;
import org.apache.camel.ExchangePattern;
import org.apache.camel.Produce;
import org.apache.camel.ProducerTemplate;
import org.apache.camel.builder.RouteBuilder;
import org.apache.camel.component.cxf.common.message.CxfConstants;
import org.apache.camel.component.mock.MockEndpoint;
import org.apache.camel.example.reportincident.InputReportIncident;
import org.apache.camel.impl.DefaultExchange;
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

	@EndpointInject(uri = "mock:partnerA")
	protected MockEndpoint partnerA;

	@EndpointInject(uri = "mock:partnerB")
	protected MockEndpoint partnerB;

	@Test
	public void testDecideIncidentEndpoints() throws Exception {

		context.getRouteDefinition("decision").adviceWith(context,
				createRouteBuilder());
		Exchange senderExchangeA = createSenderExchange(TestData
				.createInputParameterPartnerA());
		Exchange senderExchangeB = createSenderExchange(TestData
				.createInputParameterPartnerB());

		partnerA.expectedMessageCount(1);
		partnerB.expectedMessageCount(0);

		// resultEndpoint.expectedMessagesMatches(new Predicate() {
		// public boolean matches(Exchange exchange) {
		// return ((OutputReportIncident) exchange.getIn().getBody())
		// .getCode().equals("ok");
		// }
		// });

		template.send(senderExchangeA);
		assertMockEndpointsSatisfied();
		assertThat(
				partnerA.getReceivedExchanges().get(0).getIn()
						.getBody(InputReportIncident.class).getSummary(),
				is("partnerA"));
		resetMocks();
		partnerA.expectedMessageCount(0);
		partnerB.expectedMessageCount(1);
		template.send(senderExchangeB);
		assertMockEndpointsSatisfied();
		assertThat(
				partnerB.getReceivedExchanges().get(0).getIn()
						.getBody(InputReportIncident.class).getSummary(),
				is("partnerB"));

	}

	// private OutputReportIncident outputReportIncidentWithCode(String code) {
	// OutputReportIncident outputReportIncident = new OutputReportIncident();
	// outputReportIncident.setCode(code);
	// return outputReportIncident;
	// }

	@Override
	protected AbstractApplicationContext createApplicationContext() {
		return new ClassPathXmlApplicationContext(
				new String[] { "camel-context.xml" });
	}

	@Override
	protected RouteBuilder createRouteBuilder() throws Exception {
		return new RouteBuilder() {
			@Override
			public void configure() throws Exception {
				interceptSendToEndpoint("direct:partnerA")
						.skipSendToOriginalEndpoint().to("mock:partnerA");
				interceptSendToEndpoint("direct:partnerB")
						.skipSendToOriginalEndpoint().to("mock:partnerB");
			}
		};
	}

	private Exchange createSenderExchange(InputReportIncident body) {
		Exchange senderExchange = new DefaultExchange(context,
				ExchangePattern.InOut);
		senderExchange.getIn().setBody(body);
		senderExchange.getIn().setHeader(CxfConstants.OPERATION_NAME,
				"ReportIncident");
		return senderExchange;
	}
}
