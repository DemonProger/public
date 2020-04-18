package dev.programister.entity;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "logged")
public class AuthEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @PrimaryKeyJoinColumn
    private Long id;

    @NotNull
    @NotEmpty
    private String login;

    @NotNull
    @NotEmpty
    private String password;


    public AuthEntity(String login, String password) {
        setLogin(login);
        setPassword(password);
    }

    public static class Builder {
        private String login = "noname";
        private String password = "not setted";

        public Builder() {}

        public Builder login(@NotNull String login) {
            this.login = login;
            return this;
        }

        public Builder password(@NotNull String password) {
            this.password = password;
            return this;
        }

        public AuthEntity build() {
            return new AuthEntity(login, password);
        }
    }

    public AuthEntity() {}

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}