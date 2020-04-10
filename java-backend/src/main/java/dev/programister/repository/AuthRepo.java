package dev.programister.repository;

import dev.programister.entity.AuthEntity;
import org.springframework.data.repository.CrudRepository;

public interface AuthRepo extends CrudRepository<AuthEntity, Long> {
    boolean existsByLogin(String login);
    void deleteByLogin(String login);
}
