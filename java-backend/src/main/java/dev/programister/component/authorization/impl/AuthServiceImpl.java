
package dev.programister.component.authorization.impl;

import dev.programister.component.authorization.AuthService;
import dev.programister.component.authorization.data.AuthEntity;
import dev.programister.component.authorization.AuthRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class AuthServiceImpl implements AuthService {

    @Autowired
    AuthRepo authRepo;

    public void saveAuthorized(AuthEntity user) {
        if (!authRepo.existsByLogin(user.getLogin()))
            authRepo.save(user);
    }

    public Iterable<AuthEntity> getAuthorized() {
        return authRepo.findAll();
    }
}
