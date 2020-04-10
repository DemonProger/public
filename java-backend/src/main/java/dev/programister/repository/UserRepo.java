
package dev.programister.repository;

import dev.programister.entity.UserEntity;
import org.springframework.data.repository.CrudRepository;


public interface UserRepo extends CrudRepository<UserEntity, Long> {
    Iterable<UserEntity> findByLogin(String login);
    boolean existsByLogin(String login);
}