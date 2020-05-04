package dev.programister.component.authorization.data;

import lombok.AllArgsConstructor;
import lombok.Value;

@Value
@AllArgsConstructor
public class AuthResponse {
    private final String token;
}
