package org.apache.camel.example;

import com.hazelcast.core.Hazelcast;
import org.apache.camel.example.reportincident.Incident;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.Map;
@Service
public class RepositorySetup {
    Map<String, Incident> incidentRepository = Hazelcast.getMap("incidents");

    @PostConstruct
    public void setup() {
        // create input parameter
        Incident input = new Incident();
        input.setIncidentId("123");
        input.setIncidentDate("2008-08-18");
        input.setGivenName("Claus");
        input.setFamilyName("Ibsen");
        input.setSummary("Bla");
        input.setDetails("Bla bla");
        input.setEmail("davsclaus@apache.org");
        input.setPhone("0045 2962 7576");
        incidentRepository.put(input.getIncidentId(),input);
    }
}
