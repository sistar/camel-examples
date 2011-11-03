package org.apache.camel.example;

import org.apache.camel.example.reportincident.Incident;
import org.apache.camel.example.reportincident.Incidents;
import org.apache.camel.example.reportincident.OutputReportIncident;
import org.apache.cxf.jaxrs.model.wadl.ElementClass;

import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.MessageBodyWriter;
import javax.ws.rs.ext.Providers;
import java.lang.annotation.Annotation;
import java.util.Collection;
import java.util.Map;

@Path("/incidents")
public class ReportIncidentServiceResource {

    @Context
    Providers providers;

    Map<String, Incident> incidentRepository;
    private final IncidentBusinessRules incidentBusinessRules = new IncidentBusinessRules();

    @GET
    @Path("/")
    @ElementClass(response = Incidents.class)
    @Produces("application/xml")
    public Incidents getIncidents() {
        Collection<Incident> incidents = incidentRepository.values();
        return wrapIncidents(incidents);
    }


    private Incidents wrapIncidents(Collection<Incident> incidentsList) {
        Incidents incidents = new Incidents();
        for (Incident incident : incidentsList) {
            incidents.getIncident().add(incident);
        }
        return incidents;
    }

    @GET
    @Path("/{id}")
    @ElementClass(response = Incident.class)
    @Produces("application/xml")
    public Incident getIncident(@PathParam("id") String id) {
        Incident incident = incidentRepository.get(id);
        if (incident == null) {
            throw new WebApplicationException(Response.Status.NOT_FOUND);
        }
        return incident;
    }

    @PUT
    @Path("/")
    @Produces("application/xml")
    @Consumes("application/xml")
    @ElementClass(request = Incident.class, response = OutputReportIncident.class)
    public OutputReportIncident updateIncident(Incident incident) {
        if (incident.getStatus() == null) {
            MessageBodyWriter<Incident> mbw = providers.getMessageBodyWriter(Incident.class, Incident.class, new Annotation[0], MediaType.APPLICATION_XML_TYPE);
            throw new WebApplicationException(Response.status(Response.Status.BAD_REQUEST).entity(incident).build());
        }
        incidentRepository.put(incident.getIncidentId(), incident);
        return new OutputReportIncident();
    }

    final static Response METHOD_NOT_ALLOWED = Response.status(new Response.StatusType() {
        public int getStatusCode() {
            return 405;
        }

        public Response.Status.Family getFamily() {
            return Response.Status.Family.CLIENT_ERROR;
        }

        public String getReasonPhrase() {
            return "Method not Allowed";
        }
    }).build();


    @DELETE
    @Path("/{id}")
    public Response deleteIncident(@PathParam("id") String id) throws WebApplicationException {
        if (incidentRepository.containsKey(id)) {
            Incident incident = incidentRepository.get(id);

            if (incidentBusinessRules.removeAllowed(incident)) {
                incidentRepository.remove(id);
            } else {
                // Only open Incidents can be deleted
                throw new WebApplicationException(METHOD_NOT_ALLOWED);
            }
            return Response.noContent().build();
        } else {
            throw new WebApplicationException(Response.Status.NOT_FOUND);
        }
    }

    private boolean removeAllowed(Incident incident) {
        return incidentBusinessRules.removeAllowed(incident);
    }

    public Map<String, Incident> getIncidentRepository() {
        return incidentRepository;
    }

    public void setIncidentRepository(Map<String, Incident> incidentRepository) {
        this.incidentRepository = incidentRepository;
    }
}


