package dev.programister.component.registration;

import dev.programister.component.registration.data.RegistrationEntity;

import java.util.Optional;

public interface RegistrationService {
    boolean isRegistered(RegistrationEntity user);
    void register(RegistrationEntity user);
    Iterable<? extends RegistrationEntity> getRegistered();
    boolean existsByLogin(String login);
    Optional<RegistrationEntity> findByLogin(String login);
}
