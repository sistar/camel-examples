package org.apache.camel.example;

import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.xmlmatchers.transform.IdentityTransformer;
import org.xmlmatchers.transform.StringResult;
import org.xmlmatchers.transform.StringSource;

import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.transform.Source;
import java.io.ByteArrayInputStream;

/**
 * Created by IntelliJ IDEA.
 * User: RSI
 * Date: 02.11.11
 * Time: 19:45
 * To change this template use File | Settings | File Templates.
 */
public abstract class XmlTest extends org.apache.camel.test.CamelSpringTestSupport {
    protected static StringResult stringResultVersionOf(String exampleXml) {
        IdentityTransformer identity = new IdentityTransformer();
        StringResult result = new StringResult();
        Source source = StringSource.toSource(exampleXml);
        identity.transform(source, result);
        return result;
    }

    protected static Node nodeVersionOf(String exampleXml) throws Exception {
        Element element = DocumentBuilderFactory.newInstance()
                .newDocumentBuilder()
                .parse(new ByteArrayInputStream(exampleXml.getBytes()))
                .getDocumentElement();
        return element;
    }
}
