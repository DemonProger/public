
package dev.programister.service.user;

import dev.programister.entity.UserEntity;
import dev.programister.exception.user.UserRegisterException;
import dev.programister.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class UserService {

    @Autowired
    UserRepo userRepo;

    public boolean isRegistered(UserEntity user) {
        return userRepo.existsById(user.getId());
    }

    public void register(UserEntity user) throws UserRegisterException {
        if (isRegistered(user))
            throw new UserRegisterException("User already exists");
        userRepo.save(user);
    }
}
