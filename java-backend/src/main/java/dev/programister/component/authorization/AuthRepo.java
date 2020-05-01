package dev.programister.component.authorization;

import dev.programister.component.authorization.data.AuthEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface AuthRepo extends CrudRepository<AuthEntity, Long> {
    boolean existsByLogin(String login);
    long deleteByLogin(@Param("login") String login);
}
