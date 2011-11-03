package org.apache.camel.example;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;
import org.junit.runners.Parameterized.Parameters;
import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.xmlmatchers.namespace.SimpleNamespaceContext;

import javax.xml.namespace.NamespaceContext;
import javax.xml.transform.Source;
import java.util.Arrays;
import java.util.Collection;

import static org.junit.Assert.assertThat;
import static org.xmlmatchers.transform.XmlConverters.the;
import static org.xmlmatchers.xpath.HasXPath.hasXPath;

/**
 * User: RSI
 * Date: 02.11.11
 * Time: 14:04
 */
@RunWith(Parameterized.class)
public class IncidentPutValidatorTest extends XmlTest {
    protected Source xml;
    public static final String EXAMPLE_INCIDENT = "<ns2:incident xmlns:ns2=\"http://reportincident.example.camel.apache.org\">\n" +
            "<incidentId>123</incidentId>\n" +
            "<incidentDate>2008-08-18</incidentDate>\n" +
            "<givenName>Claus</givenName>\n" +
            "<familyName>Ibsen</familyName>\n" +
            "<summary>Bla</summary>\n" +
            "<details>Bla bla</details>\n" +
            "<email>davsclaus@apache.org</email>\n" +
            "<phone>0045 2962 7576</phone>\n" +
            "</ns2:incident>";

    public IncidentPutValidatorTest(Source xml) {
        this.xml = xml;
    }

    @Parameters
    public static Collection<Source[]> data() throws Exception {
        return Arrays.asList(new Source[][]{//
                {the(EXAMPLE_INCIDENT)},//
                {the(nodeVersionOf(EXAMPLE_INCIDENT))},//
                {the(stringResultVersionOf(EXAMPLE_INCIDENT))},//
        });
    }

    @Test
    public void testThatIncompleteIncidentIsCommentedWithExplanation() {
        assertThat(xml, hasXPath("/ri:incident/incidentId",usingNamespaces));
    }

    private NamespaceContext usingNamespaces = new SimpleNamespaceContext()
            .withBinding("ri", "http://reportincident.example.camel.apache.org");

    @Override
    protected AbstractApplicationContext createApplicationContext() {
        return new ClassPathXmlApplicationContext(new String[]{"META-INF/spring/camel-context.xml"});

    }
}
