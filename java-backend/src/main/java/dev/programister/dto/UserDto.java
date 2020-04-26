package dev.programister.dto;

import dev.programister.entity.UserEntity;
import lombok.Value;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;


@Value
public class UserDto {
    @NotNull
    @Size(min = 2, message = "Too short login")
    @Size(max = 30, message = "Too long login")
    private String login;

    @NotNull
    @Size(min = 2, message = "Too short email")
    @Size(max = 30, message = "Too long email")
    @Email(regexp=".@.\\..*", message = "Email should be valid")
    private String email;

    @NotNull
    @NotEmpty
    @Size(min = 8, message = "Too short password")
    @Size(max = 30, message = "Too long password")
    private String password;


    public UserEntity toEntity() {
        return new UserEntity()
                .builder()
                .email(email)
                .login(login)
                .password(password)
                .build();
    }
}
