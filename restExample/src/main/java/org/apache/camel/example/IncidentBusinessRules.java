package org.apache.camel.example;

import org.apache.camel.example.reportincident.Incident;

public class IncidentBusinessRules {
    public IncidentBusinessRules() {
    }

    boolean removeAllowed(Incident incident) {
        return incident.getStatus().equals("open");
    }
}