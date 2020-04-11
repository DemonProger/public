
package dev.programister.service.user;

import dev.programister.entity.AuthEntity;
import dev.programister.exception.user.UserNotExistsException;
import dev.programister.repository.AuthRepo;
import dev.programister.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

@Component
@Transactional
public class AuthService {

    @Autowired
    AuthRepo authRepo;

    @Autowired
    UserRepo userRepo;


    public void logIn(AuthEntity user) throws UserNotExistsException {
        if (!userRepo.existsByLogin(user.getLogin()))
            throw new UserNotExistsException("User is not exists");
        authRepo.deleteByLogin(user.getLogin());
        authRepo.save(user);
    }

    public Iterable<AuthEntity> getLooged() {
        return authRepo.findAll();
    }
}
