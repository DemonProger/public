
package dev.programister.service.user;

import dev.programister.entity.AuthEntity;
import dev.programister.exception.user.UserNotExistsException;
import dev.programister.repository.AuthRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

@Component
@Transactional
public class AuthService {

    @Autowired
    AuthRepo authRepo;

    public void logIn(AuthEntity user) {
        if (!authRepo.existsByLogin(user.getLogin()))
            authRepo.save(user);
    }

    public Iterable<AuthEntity> getLooged() {
        return authRepo.findAll();
    }
}
