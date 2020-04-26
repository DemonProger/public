package dev.programister.dto;


import dev.programister.entity.AuthEntity;
import lombok.Value;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;


@Value
public class AuthDto {
    @NotNull
    @NotEmpty
    @Size(max = 30, message = "Too long login")
    private String login;

    @NotNull
    @NotEmpty
    @Size(max = 30, message = "Too long login")
    private String password;


    public AuthEntity toEntity() {
        return new AuthEntity().builder()
                .login(login)
                .password(password)
                .build();
    }
}
