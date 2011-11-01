package org.example.reportincident;

import org.apache.camel.example.reportincident.InputReportIncident;
import org.apache.camel.example.reportincident.OutputReportIncident;
import org.apache.camel.example.reportincident.ReportIncidentEndpoint;
import org.apache.camel.test.junit4.CamelSpringTestSupport;
import org.apache.cxf.jaxws.JaxWsProxyFactoryBean;
import org.junit.Test;
import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * Unit test of our routes
 */
public class ReportIncidentRoutesClientTest extends CamelSpringTestSupport {

	// should be the same address as we have in our route
	private static final String URL_A = "http://localhost:8182/cxf/camel-example-cxf-osgi/webservices/incidentA";
	private static final String URL_B = "http://localhost:8182/cxf/camel-example-cxf-osgi/webservices/incidentB";

	protected static ReportIncidentEndpoint createCXFClient(String url) {
		// we use CXF to create a client for us as its easier than JAXWS and
		// works
		JaxWsProxyFactoryBean factory = new JaxWsProxyFactoryBean();
		factory.setServiceClass(ReportIncidentEndpoint.class);
		factory.setAddress(url);
		return (ReportIncidentEndpoint) factory.create();
	}

	@Test
	public void testRendportIncident() throws Exception {
		// create input parameter
		InputReportIncident input = new InputReportIncident();
		input.setIncidentId("123");
		input.setIncidentDate("2011-11-01");
		input.setGivenName("Christoph");
		input.setFamilyName("Ortmann");
		input.setSummary("summary");
		input.setDetails("details");
		input.setEmail("cor@opitz-consulting.com");
		input.setPhone("0049 40 7411220");

		// create the webservice client and send the request
		ReportIncidentEndpoint clientA = createCXFClient(URL_A);
		log.info("calling partnerA");
		OutputReportIncident out = clientA.reportIncident(input);

		// assert we got a OK back
		assertEquals("ok", out.getCode());

		log.info("calling partnerB");
		ReportIncidentEndpoint clientB = createCXFClient(URL_B);
		out = clientB.reportIncident(input);
		// assert we got a notOK back
		assertEquals("notOK", out.getCode());
		// while (true){Thread.sleep(1000);}

	}

	@Override
	protected AbstractApplicationContext createApplicationContext() {
		return new ClassPathXmlApplicationContext(
				new String[] { "camel-context.xml" });
	}
}
