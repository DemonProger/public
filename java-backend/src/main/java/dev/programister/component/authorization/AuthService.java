package dev.programister.component.authorization;

import dev.programister.component.authorization.data.AuthEntity;

public interface AuthService {
    void saveAuthorized(AuthEntity user);
    Iterable<AuthEntity> getAuthorized();
}
