package dev.programister.dto;

import dev.programister.entity.UserEntity;
import lombok.AllArgsConstructor;
import lombok.Value;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.ArrayList;


@Value
@AllArgsConstructor
public class UserDto {
    @NotNull
    @Size(min = 2, max = 30)
    private String login;

    @NotNull
    @Size(min = 2, max = 30)
    private String email;

    @NotNull
    @NotEmpty
    @Size(min = 8, max = 30)
    private String password;


    public UserEntity toEntity() {
        return new UserEntity()
                .builder()
                .email(email)
                .login(login)
                .password(password)
                .build();
    }


    public static UserDto fromEntity(UserEntity e) {
        return new UserDto(e.getLogin(), e.getEmail(), e.getPassword());
    }


    public static Iterable<UserDto> fromEntities(Iterable<? extends  UserEntity> entities) {
        var res = new ArrayList<UserDto>();
        entities.forEach(e -> res.add(UserDto.fromEntity(e)));
        return res;
    }

}
