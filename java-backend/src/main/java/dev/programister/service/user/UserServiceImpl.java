package dev.programister.service.user;

import dev.programister.entity.UserEntity;
import dev.programister.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;

public class UserServiceImpl implements UserService {

    @Autowired
    UserRepo userRepo;

    @Override
    public Boolean isRegistered(UserEntity user) {
        return true;
    }

    @Override
    public void register(UserEntity user) {

    }
}
