package dev.programister.service;

import dev.programister.entity.UserEntity;

public class UserServiceImpl implements UserService {

    @Override
    public Boolean isRegistered(UserEntity user) {
        return true;
    }

    @Override
    public void register(UserEntity user) {

    }
}
