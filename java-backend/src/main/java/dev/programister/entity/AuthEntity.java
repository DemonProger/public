package dev.programister.entity;

import dev.programister.dto.AuthDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "logged")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @PrimaryKeyJoinColumn
    @Column(name = "id")
    @Builder.Default
    private Long id = Long.valueOf(0);

    @NotNull
    @NotEmpty
    @Column(name = "login")
    private String login;

    @NotNull
    @NotEmpty
    @Column(name = "password")
    private String password;

    public static AuthEntity fromDto(AuthDto data) {
        return new AuthEntity().builder()
                .login(data.getLogin())
                .password(data.getPassword())
                .build();
    }
}