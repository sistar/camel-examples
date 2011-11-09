package camel.business;

/*import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name = "demo_users")           */
public class PersonEntity {
    private Long id;

    private String name;

    public String toString() {
        return "Person[personId: " + id + " name: " + name +"]";
    }

    //@Id
    public Long getId() {
        return id;
    }

    public void setPersonId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

}
