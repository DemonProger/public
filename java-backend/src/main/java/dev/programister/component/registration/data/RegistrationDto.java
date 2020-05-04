package dev.programister.component.registration.data;

import com.sun.istack.Nullable;
import lombok.AllArgsConstructor;
import lombok.Value;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.ArrayList;


@Value
@AllArgsConstructor
public class RegistrationDto {
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


    public RegistrationEntity toEntity() {
        return new RegistrationEntity()
                .builder()
                .email(email)
                .login(login)
                .password(password)
                .build();
    }


    public static RegistrationDto fromEntity(RegistrationEntity e) {
        return new RegistrationDto(e.getLogin(), e.getEmail(), e.getPassword());
    }


    public static Iterable<RegistrationDto> fromEntities(Iterable<? extends RegistrationEntity> entities) {
        var res = new ArrayList<RegistrationDto>();
        entities.forEach(e -> res.add(RegistrationDto.fromEntity(e)));
        return res;
    }

}
