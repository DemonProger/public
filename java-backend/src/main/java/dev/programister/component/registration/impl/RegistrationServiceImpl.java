
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


    @Override
    public void register(RegistrationEntity user) {
        userRepo.save(user);
    }


    @Override
    public Iterable<? extends RegistrationEntity> getRegistered() {
        return userRepo.findAll();
    }


    @Override
    public boolean isRegistered(String login) {
        return userRepo.existsByLogin(login);
    }


    @Override
    public Optional<RegistrationEntity> findByLogin(String login) {
        return userRepo.findByLogin(login);
    }
}
