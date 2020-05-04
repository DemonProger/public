package dev.programister.component.registration;

import dev.programister.component.registration.data.JwtRegistration;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface JwtRegistrationService  {
    Iterable<? extends JwtRegistration> findAll();
    JwtRegistration findByLogin(String login);
}
