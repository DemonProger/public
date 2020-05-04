
package dev.programister.component.registration.impl;

import dev.programister.component.registration.RegistrationService;
import dev.programister.component.registration.RegistrationRepo;
import dev.programister.component.registration.data.RegistrationEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Component
@Transactional
public class RegistrationServiceImpl implements RegistrationService {

    @Autowired
    private RegistrationRepo userRepo;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;


    @Override
    public void register(RegistrationEntity user) {
        user.setPassword(
                passwordEncoder.encode(user.getPassword()));
        userRepo.save(user);
    }


    @Override
    public Iterable<? extends RegistrationEntity> findAll() {
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


    @Override
    public void deleteByLogin(String login) {
        userRepo.deleteByLogin(login);
    }
}
