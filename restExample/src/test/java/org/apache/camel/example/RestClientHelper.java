package org.apache.camel.example;

import org.apache.camel.*;
import org.apache.camel.component.cxf.common.message.CxfConstants;
import org.apache.camel.example.reportincident.Incident;
import org.apache.camel.impl.DefaultExchange;
import org.apache.cxf.jaxrs.client.ClientWebApplicationException;
import org.apache.cxf.jaxrs.client.ServerWebApplicationException;

import javax.ws.rs.HttpMethod;

public class RestClientHelper {
    private ProducerTemplate template;
    private Endpoint cxfRsClientEndpoint;

    public RestClientHelper() {
    }

    public RestClientHelper(ProducerTemplate template, Endpoint cxfRsClientEndpoint) {
        this.template = template;
        this.cxfRsClientEndpoint = cxfRsClientEndpoint;
    }

    public static Exchange doCall(Exchange exchange, ProducerTemplate producerTemplate) throws Exception {
        producerTemplate.send(exchange);
        Exception exception = exchange.getException();
        if (exception != null) {
            if (exception instanceof ServerWebApplicationException) {
                // not Found
                if (((ServerWebApplicationException) exception).getStatus() >= 500) {
                    throw exception;
                }
            } else if (exception instanceof ClientWebApplicationException) {
                // not recoverable
                throw exception;
            }
        }
        return exchange;
    }

    public Exchange prepPut(Endpoint cxfRsClient, String path, Class<?> aClass, Object body) throws Exception {
        return prepareCall(cxfRsClient, HttpMethod.PUT, path, aClass, body);
    }

    public static Exchange prepGet(Endpoint cxfRsClient, String path, Class<?> aClass) throws Exception {
        return prepareCall(cxfRsClient, HttpMethod.GET, path, aClass, null);
    }

    public static Exchange prepDelete(Endpoint cxfRsClient, String path) throws Exception {
        return prepareCall(cxfRsClient, HttpMethod.DELETE, path, null, null);
    }

    public static Exchange prepareCall(Endpoint endpoint, String method, String path, Class<?> aClass, Object body) {
        Exchange exchange = new DefaultExchange(endpoint);
        exchange.setPattern(ExchangePattern.InOut);
        Message inMessage = exchange.getIn();
        inMessage.setHeader(CxfConstants.CAMEL_CXF_RS_USING_HTTP_API, Boolean.TRUE);
        inMessage.setHeader(Exchange.HTTP_METHOD, method);
        inMessage.setHeader(Exchange.HTTP_PATH, path);   //relative path
        inMessage.setHeader(CxfConstants.CAMEL_CXF_RS_RESPONSE_CLASS, aClass);
        inMessage.setBody(body);
        return exchange;
    }

    public static Exchange retrieveToExchangeOut(String path, Class<?> aClass, ProducerTemplate producerTemplate, Endpoint cxfRsClient) throws Exception {
        Exchange exchange = prepGet(cxfRsClient, path, aClass);
        return doCall(exchange, producerTemplate);
    }

    public static Exchange deleteToExchangeOut(String path, ProducerTemplate producerTemplate,  Endpoint cxfRsClient) throws Exception {
        Exchange exchange = prepDelete(cxfRsClient, path);
        return doCall(exchange, producerTemplate);
    }

    public Exchange retrieveToExchangeOut(String path ,Class<?> clazz) throws Exception {
        return retrieveToExchangeOut(path,clazz,template,cxfRsClientEndpoint);
    }

    public Exchange deleteToExchangeOut(String path) throws Exception {
        return deleteToExchangeOut(path,template,cxfRsClientEndpoint);
    }
}