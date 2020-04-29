
package dev.programister.repository;

import dev.programister.entity.UserEntity;
import org.springframework.data.repository.CrudRepository;
import java.util.Optional;


public interface UserRepo extends CrudRepository<UserEntity, Long> {
    Optional<UserEntity> findByLogin(String login);
    boolean existsByLogin(String login);
}