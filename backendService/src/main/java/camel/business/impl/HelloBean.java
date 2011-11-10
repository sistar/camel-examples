package camel.business.impl;

import camel.business.Hello;

import javax.sql.DataSource;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class HelloBean implements Hello {

    private org.apache.commons.dbcp.BasicDataSource ds;

    private String say = "Hello from #wjax to ";


    public String hello() {
        StringBuilder sayNamed = new StringBuilder(say);
        try {
            PreparedStatement stmt = ds.getConnection().prepareStatement("select name from demo_users");
            ResultSet resultSet = stmt.executeQuery();
            while ( resultSet.next()){
                sayNamed.append( " @" + resultSet.getString("name")) ;
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        return sayNamed + " at " + sdf.format(new Date());
    }

    public String getSay() {
        return say;
    }

    public void setSay(String say) {
        this.say = say;
    }

    public org.apache.commons.dbcp.BasicDataSource getDs() {
        return ds;
    }

    public void setDs(org.apache.commons.dbcp.BasicDataSource ds) {
        this.ds = ds;
    }
}
