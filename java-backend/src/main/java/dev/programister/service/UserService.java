
package dev.programister.service;
import dev.programister.entity.UserEntity;


public interface UserService {
    Boolean isRegistered(UserEntity user);
    void register(UserEntity user);
}

