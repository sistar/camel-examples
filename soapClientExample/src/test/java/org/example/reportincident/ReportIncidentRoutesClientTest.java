package org.example.reportincident;

import static org.hamcrest.CoreMatchers.is;

import org.apache.camel.EndpointInject;
import org.apache.camel.Exchange;
import org.apache.camel.ExchangePattern;
import org.apache.camel.Predicate;
import org.apache.camel.Processor;
import org.apache.camel.Produce;
import org.apache.camel.ProducerTemplate;
import org.apache.camel.builder.RouteBuilder;
import org.apache.camel.component.cxf.common.message.CxfConstants;
import org.apache.camel.component.mock.MockEndpoint;
import org.apache.camel.example.reportincident.InputReportIncident;
import org.apache.camel.example.reportincident.OutputReportIncident;
import org.apache.camel.impl.DefaultExchange;
import org.apache.camel.test.junit4.CamelSpringTestSupport;
import org.apache.cxf.message.MessageContentsList;
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

	@EndpointInject(uri = "mock:statusOK")
	protected MockEndpoint statusOK;

	@EndpointInject(uri = "mock:statusNotOK")
	protected MockEndpoint statusNotOK;

	@Test
	public void testDecideIncidentEndpoints() throws Exception {
		context.getRouteDefinition("invocationDecision").adviceWith(context,
				createRouteBuilderPartnerDecision(true));
		Exchange senderExchangeA = createSenderExchange(TestData
				.createInputParameterPartnerA());
		Exchange senderExchangeB = createSenderExchange(TestData
				.createInputParameterPartnerB());

		partnerA.expectedMessageCount(1);
		partnerB.expectedMessageCount(1);

		template.send(senderExchangeA);
		template.send(senderExchangeB);
		assertMockEndpointsSatisfied();
		assertThat(
				partnerA.getReceivedExchanges().get(0).getIn()
						.getBody(InputReportIncident.class).getSummary(),
				is("partnerA"));
		assertThat(
				partnerB.getReceivedExchanges().get(0).getIn()
						.getBody(InputReportIncident.class).getSummary(),
				is("partnerB"));
	}

	@Test
	public void testDecideResultEndpoints() throws Exception {
		context.getRouteDefinition("invocationDecision").adviceWith(context,
				createRouteBuilderPartnerDecision(false));
		context.getRouteDefinition("resultDecision").adviceWith(context,
				createRouteBuilderResultDecision());
		partnerA.whenAnyExchangeReceived(new MockStatusProcessor("ok"));
		partnerA.expectedMessageCount(1);
		partnerB.whenAnyExchangeReceived(new MockStatusProcessor("notOK"));
		partnerB.expectedMessageCount(1);

		statusOK.expectedMessageCount(1);
		statusNotOK.expectedMessageCount(1);

		statusOK.expectedMessagesMatches(new ResultMessagePredicate("ok"));
		statusNotOK
				.expectedMessagesMatches(new ResultMessagePredicate("notOK"));

		template.send(createSenderExchange(TestData
				.createInputParameterPartnerA()));
		template.send(createSenderExchange(TestData
				.createInputParameterPartnerB()));

		assertMockEndpointsSatisfied();
	}

	@Override
	protected AbstractApplicationContext createApplicationContext() {
		return new ClassPathXmlApplicationContext(
				new String[] { "camel-context.xml" });
	}

	private RouteBuilder createRouteBuilderResultDecision() throws Exception {
		return new RouteBuilder() {

			@Override
			public void configure() throws Exception {
				interceptSendToEndpoint("direct:statusOK")
						.skipSendToOriginalEndpoint().to("mock:statusOK");
				interceptSendToEndpoint("direct:statusNotOK")
						.skipSendToOriginalEndpoint().to("mock:statusNotOK");
			}
		};

	}

	private RouteBuilder createRouteBuilderPartnerDecision(boolean skipMessages)
			throws Exception {

		if (skipMessages) {
			return new RouteBuilder() {
				@Override
				public void configure() throws Exception {
					interceptSendToEndpoint("direct:partnerA")
							.skipSendToOriginalEndpoint().to("mock:partnerA");
					interceptSendToEndpoint("direct:partnerB")
							.skipSendToOriginalEndpoint().to("mock:partnerB");
				}
			};
		} else {
			return new RouteBuilder() {
				@Override
				public void configure() throws Exception {
					interceptSendToEndpoint("direct:partnerA")
							.skipSendToOriginalEndpoint().to("mock:partnerA")
							.to("direct:wsResponse");
					interceptSendToEndpoint("direct:partnerB")
							.skipSendToOriginalEndpoint().to("mock:partnerB")
							.to("direct:wsResponse");
				}
			};
		}
	}

	private Exchange createSenderExchange(InputReportIncident body) {
		Exchange senderExchange = new DefaultExchange(context,
				ExchangePattern.InOut);
		senderExchange.getIn().setBody(body);
		senderExchange.getIn().setHeader(CxfConstants.OPERATION_NAME,
				"ReportIncident");
		return senderExchange;
	}

	private class MockStatusProcessor implements Processor {

		private String code;

		public MockStatusProcessor(String code) {
			this.code = code;
		}

		@Override
		public void process(Exchange exchange) throws Exception {
			MessageContentsList messageContentsList = new MessageContentsList();
			OutputReportIncident outputReportIncident = new OutputReportIncident();
			outputReportIncident.setCode(code);
			messageContentsList.add(outputReportIncident);
			exchange.getIn().setBody(messageContentsList);
		}
	}

	private class ResultMessagePredicate implements Predicate {

		private String status;

		public ResultMessagePredicate(String status) {
			this.status = status;
		}

		@Override
		public boolean matches(Exchange exchange) {
			return ((OutputReportIncident) exchange.getIn().getBody())
					.getCode().equals(status);
		}

	}
}
