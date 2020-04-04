
package dev.programister.repository;

import dev.programister.entity.UserEntity;
import org.springframework.data.repository.CrudRepository;
import java.util.List;


public interface UserRepo extends CrudRepository<UserEntity, Long> {
    List<UserEntity> findByName(String name);
}