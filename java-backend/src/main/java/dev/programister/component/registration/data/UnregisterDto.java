package dev.programister.component.registration.data;

import lombok.AllArgsConstructor;
import lombok.Value;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;


@Value
@AllArgsConstructor
public class UnregisterDto {
    @NotEmpty
    @Size(max = 30)
    private String login;

    public UnregisterDto() {
        this.login = "";
    }
}
