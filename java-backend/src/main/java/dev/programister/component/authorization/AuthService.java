package dev.programister.component.authorization;

import dev.programister.component.authorization.data.AuthEntity;

public interface AuthService {
    void authorize(AuthEntity user);
    Iterable<AuthEntity> getAuthorized();
}
