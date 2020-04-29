
package dev.programister.service.user;

import dev.programister.entity.UserEntity;
import dev.programister.exception.user.UserRegisterException;
import dev.programister.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Component
@Transactional
public class UserService {

    @Autowired
    UserRepo userRepo;

    public boolean isRegistered(UserEntity user) {
        return userRepo.existsByLogin(user.getLogin());
    }

    public void register(UserEntity user) throws UserRegisterException {
        if (isRegistered(user))
            throw new UserRegisterException("User already exists");
        userRepo.save(user);
    }

    public Iterable<? extends UserEntity> getRegistered() {
        return userRepo.findAll();
    }

    public boolean existsByLogin(String login) {
        return userRepo.existsByLogin(login);
    }

    public Optional<UserEntity> findByLogin(String login) {
        return userRepo.findByLogin(login);
    }
}
