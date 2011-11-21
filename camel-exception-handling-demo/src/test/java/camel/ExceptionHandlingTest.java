package camel;

import org.apache.camel.Exchange;
import org.apache.camel.Processor;
import org.apache.camel.Route;
import org.apache.camel.builder.RouteBuilder;
import org.apache.camel.test.junit4.CamelTestSupport;
import org.junit.Test;

import static org.hamcrest.core.Is.is;

public class ExceptionHandlingTest extends CamelTestSupport {

    @Test
    public void testThatExceptionOccurs() throws Exception {
        assertThat(context().isAutoStartup(),is(true));

        for (Route route : context().getRoutes()) {
            System.out.println(route);
            System.out.println(route.getProperties());
        }
        //how can we
        Thread.sleep(15000);
    }

    @Override
    protected RouteBuilder createRouteBuilder() throws Exception {
        return new RouteBuilder() {
            @Override
            public void configure() throws Exception {
                onException(RuntimeException.class).process(new Processor() {
                    @Override
                    public void process(Exchange exchange) throws Exception {
                        System.out.println("DAS IST NICHT GUT!");
                    }
                });
                from("timer:bar?period=5000").bean(HelloBean.class,"hello").to("log:baz");
            }
        };
    }
}
