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
public class ReportIncidentServiceResource {

    Map<String, Incident> incidentRepository = Hazelcast.getMap("incidents");


    @GET
    @Path("/")
    public Response getIncidents() {
        javax.ws.rs.core.Response.ResponseBuilder responseBuilder = new ResponseBuilderImpl();
        Collection<Incident> incidents = incidentRepository.values();
        responseBuilder.status(Response.Status.OK);
        responseBuilder.entity(wrapIncidents(incidents));
        return responseBuilder.build();
    }

    private Incidents wrapIncidents(Collection<Incident> incidentsList) {
        Incidents incidents = new Incidents();
        for(Incident incident : incidentsList){
            incidents.getIncident().add(incident);
        }
        return incidents;
    }

    @GET
    @Path("/{id}")
    public Response getIncident(@PathParam("id") String id) {
        javax.ws.rs.core.Response.ResponseBuilder responseBuilder = new ResponseBuilderImpl();
        Incident incident = incidentRepository.get(id);
        if (incident != null) {
            responseBuilder.status(Response.Status.OK);
            responseBuilder.entity(incident);
        } else {
            responseBuilder.status(Response.Status.NOT_FOUND);
        }

        return responseBuilder.build();
    }

    @PUT
    @Path("/")
    public Response updateIncident(Incident incident) {
        javax.ws.rs.core.Response.ResponseBuilder responseBuilder = new ResponseBuilderImpl();
        responseBuilder.status(Response.Status.OK);
        responseBuilder.entity(new OutputReportIncident());
        return responseBuilder.build();
    }
}
