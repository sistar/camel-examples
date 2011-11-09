package org.apache.camel.example;

import com.hazelcast.config.*;
import com.hazelcast.core.Hazelcast;
import org.apache.camel.example.reportincident.Incident;

import javax.annotation.PostConstruct;
import java.util.Collection;
import java.util.Map;
import java.util.Set;


public class RepositorySetup implements Map<String, Incident> {
    Map<String, Incident> incidentRepository=Hazelcast.getMap("incidents");

    @PostConstruct
    public void setup() {

        /*// create input parameter
        Incident input = new Incident();
        input.setIncidentId("123");
        input.setIncidentDate("2008-08-18");
        input.setGivenName("Claus");
        input.setFamilyName("Ibsen");
        input.setSummary("Bla");
        input.setDetails("Bla bla");
        input.setEmail("davsclaus@apache.org");
        input.setPhone("0045 2962 7576");
        incidentRepository.put(input.getIncidentId(), input);*/
    }

    public int size() {
        return incidentRepository.size();
    }

    public boolean isEmpty() {
        return incidentRepository.isEmpty();
    }

    public boolean containsKey(Object key) {
        return incidentRepository.containsKey(key);
    }

    public boolean containsValue(Object value) {
        return incidentRepository.containsValue(value);
    }

    public Incident get(Object key) {
        return incidentRepository.get(key);
    }

    public Incident put(String key, Incident value) {
        return incidentRepository.put(key, value);
    }

    public Incident remove(Object key) {
        return incidentRepository.remove(key);
    }

    public void putAll(Map<? extends String, ? extends Incident> m) {
        incidentRepository.putAll(m);
    }

    public void clear() {
        incidentRepository.clear();
    }

    public Set<String> keySet() {
        return incidentRepository.keySet();
    }

    public Collection<Incident> values() {
        return incidentRepository.values();
    }

    public Set<Entry<String, Incident>> entrySet() {
        return incidentRepository.entrySet();
    }
}
