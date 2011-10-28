package org.apache.camel.example;

import com.hazelcast.core.Hazelcast;
import org.apache.camel.example.reportincident.Incident;
import org.apache.camel.example.reportincident.Incidents;
import org.apache.camel.example.reportincident.OutputReportIncident;
import org.apache.cxf.jaxrs.impl.ResponseBuilderImpl;

import javax.ws.rs.GET;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.Response;
import java.util.Collection;
import java.util.Map;

@Path("/incidents")
public class ReportIncidentServiceDummyResource {
    @GET
    @Path("/")
    public Response getIncidents() {
        return null;
    }

    private Incidents wrapIncidents(Collection<Incident> incidentsList) {
        return null;
    }

    @GET
    @Path("/{id}")
    public Response getIncident(@PathParam("id") String id) {
        return null;
    }

    @PUT
    @Path("/")
    public Response updateIncident(Incident incident) {
        return null;
    }
}
