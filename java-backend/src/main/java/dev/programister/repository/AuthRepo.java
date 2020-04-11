package dev.programister.repository;

import dev.programister.entity.AuthEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface AuthRepo extends CrudRepository<AuthEntity, Long> {
    boolean existsByLogin(String login);
    long deleteByLogin(@Param("login") String login);
}
