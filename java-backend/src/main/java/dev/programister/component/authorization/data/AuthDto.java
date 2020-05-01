package dev.programister.component.authorization.data;


import lombok.AllArgsConstructor;
import lombok.Value;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.ArrayList;


@Value
@AllArgsConstructor
public class AuthDto {
    @NotNull
    @NotEmpty
    @Size(min = 2, max = 30)
    private String login;

    @NotNull
    @NotEmpty
    @Size(min = 8, max = 30)
    private String password;


    public AuthEntity toEntity() {
        return new AuthEntity().builder()
                .login(login)
                .password(password)
                .build();
    }


    public static AuthDto fromEntity(AuthEntity entity) {
        return new AuthDto(entity.getLogin(), entity.getPassword());
    }


    public static Iterable<AuthDto> fromEntities(Iterable<? extends AuthEntity> entities) {
        var res = new ArrayList<AuthDto>();
        entities.forEach(entity -> res.add(AuthDto.fromEntity(entity)));
        return res;
    }
}
