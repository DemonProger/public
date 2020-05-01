package dev.programister.component.registration;

import dev.programister.component.registration.data.RegistrationEntity;

import java.util.Optional;

public interface RegistrationService {
    void register(RegistrationEntity user);
    Iterable<? extends RegistrationEntity> getRegistered();
    boolean isRegistered(String login);
    Optional<RegistrationEntity> findByLogin(String login);
}
