package dev.programister.entity;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "users")
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @PrimaryKeyJoinColumn
    private Long id;

    @NotNull
    @NotEmpty
    @Size(min = 2, message = "Too short login")
    @Size(max = 30, message = "Too long login")
    private String login;

    @NotNull
    @NotEmpty
    @Size(min = 2, message = "Too short email")
    @Size(max = 30, message = "Too long email")
    @Email(regexp=".@.\\..*", message = "Email should be valid")
    private String email;

    @NotNull
    @NotEmpty
    @Size(min = 8, message = "Too short password")
    @Size(max = 30, message = "Too long password")
    private String password;

    public UserEntity(String login, String email, String password) {
        setLogin(login);
        setEmail(email);
        setPassword(password);
    }

    public UserEntity() {}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }
}
