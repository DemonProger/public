
package dev.programister.service.user;
import dev.programister.entity.UserEntity;


public interface UserService {
    Boolean isRegistered(UserEntity user);
    void register(UserEntity user);
}

