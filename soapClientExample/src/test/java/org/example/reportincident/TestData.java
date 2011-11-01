package org.example.reportincident;

import org.apache.camel.example.reportincident.InputReportIncident;

public class TestData {
	public static InputReportIncident createInputParameterPartnerA() {
		// create input parameter
		InputReportIncident input = new InputReportIncident();
		input.setIncidentId("123");
		input.setIncidentDate("2011-11-01");
		input.setGivenName("Ralf");
		input.setFamilyName("Sigmund");
		input.setSummary("partnerA");
		input.setDetails("Details");
		input.setEmail("rsi@opitz-consulting.com");
		input.setPhone("0049 40 7411220");
		return input;
	}

	public static InputReportIncident createInputParameterPartnerB() {
		// create input parameter
		InputReportIncident input = new InputReportIncident();
		input.setIncidentId("456");
		input.setIncidentDate("2011-11-01");
		input.setGivenName("Christoph");
		input.setFamilyName("Ortmann");
		input.setSummary("partnerB");
		input.setDetails("Details");
		input.setEmail("cor@opitz-consulting.com");
		input.setPhone("0049 40 7411220");
		return input;
	}
}
