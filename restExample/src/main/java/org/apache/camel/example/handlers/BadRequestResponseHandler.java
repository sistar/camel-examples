package org.apache.camel.example.handlers;


import org.apache.cxf.jaxrs.ext.ResponseHandler;
import org.apache.cxf.jaxrs.model.OperationResourceInfo;
import org.apache.cxf.message.Message;

import javax.ws.rs.core.Response;
import javax.xml.stream.XMLInputFactory;
import javax.xml.stream.XMLStreamException;
import javax.xml.stream.XMLStreamReader;
import java.io.*;

public class BadRequestResponseHandler implements ResponseHandler {
    public Response handleResponse(Message m, OperationResourceInfo ori, Response response) {
        OutputStream os = m.getContent(OutputStream.class);

        try {
            m.setContent(OutputStream.class,
                    new BadRequestOutputStream(os));
        } catch (XMLStreamException e) {
            e.printStackTrace();  //To change body of catch statement use File | Settings | File Templates.
        }
        return response;
    }

    class BadRequestOutputStream extends FilterOutputStream {

        public BadRequestOutputStream(OutputStream os) throws XMLStreamException {
            super(os);
            XMLStreamReader xmlStreamReader = xmlInputFactory.createXMLStreamReader(byteArrayInputStream);

        }

        ByteArrayInputStream byteArrayInputStream = new ByteArrayInputStream(new byte[1000]);
        XMLInputFactory xmlInputFactory = XMLInputFactory.newInstance();

        @Override
        public void write(int b) throws IOException {



        }
    }
}
