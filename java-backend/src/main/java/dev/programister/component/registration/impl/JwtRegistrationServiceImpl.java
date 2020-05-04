package dev.programister.component.registration.impl;

import dev.programister.component.registration.JwtRegistrationService;
import dev.programister.component.registration.RegistrationService;
import dev.programister.component.registration.data.JwtRegistration;
import dev.programister.component.registration.data.RegistrationEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.acls.model.NotFoundException;
import org.springframework.stereotype.Service;

import java.util.stream.Collectors;
import java.util.stream.Stream;


@Service
public class JwtRegistrationServiceImpl implements JwtRegistrationService {

    @Autowired
    RegistrationService registrationService;


    @Override
    public Iterable<? extends JwtRegistration> findAll() {
        var registrations = registrationService.findAll();
        return Stream.of(registrations)
                .map(r -> JwtRegistration.fromRegistation((RegistrationEntity) r))
                .collect(Collectors.toList());
    }


    @Override
    public JwtRegistration findByLogin(String login) {
        var entity = registrationService.findByLogin(login);
        return JwtRegistration.fromRegistation(entity
                .orElseThrow(() -> new NotFoundException("User not found by login")));
    }
}
