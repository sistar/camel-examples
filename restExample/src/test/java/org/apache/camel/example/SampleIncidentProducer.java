package org.apache.camel.example;

import org.apache.camel.example.reportincident.Incident;

public class SampleIncidentProducer {
    public SampleIncidentProducer() {
    }

    public Incident defaultIncident() {
        Incident incident = new Incident();
        incident.setIncidentId("123");
        incident.setIncidentDate("2008-08-18");
        incident.setGivenName("Claus");
        incident.setFamilyName("Ibsen");
        incident.setSummary("Bla");
        incident.setDetails("Bla bla");
        incident.setEmail("davsclaus@apache.org");
        incident.setPhone("0045 2962 7576");
        incident.setStatus("open");
        return incident;
    }
}