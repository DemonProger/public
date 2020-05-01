
package dev.programister.component.registration.impl;

import dev.programister.component.registration.RegistrationService;
import dev.programister.component.registration.RegistrationRepo;
import dev.programister.component.registration.data.RegistrationEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Component
@Transactional
public class RegistrationServiceImpl implements RegistrationService {

    @Autowired
    RegistrationRepo userRepo;

    public boolean isRegistered(RegistrationEntity user) {
        return userRepo.existsByLogin(user.getLogin());
    }

    public void register(RegistrationEntity user) {
        userRepo.save(user);
    }

    public Iterable<? extends RegistrationEntity> getRegistered() {
        return userRepo.findAll();
    }

    public boolean existsByLogin(String login) {
        return userRepo.existsByLogin(login);
    }

    public Optional<RegistrationEntity> findByLogin(String login) {
        return userRepo.findByLogin(login);
    }
}
