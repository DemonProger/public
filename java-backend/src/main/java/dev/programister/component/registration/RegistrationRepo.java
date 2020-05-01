
package dev.programister.component.registration;

import dev.programister.component.registration.data.RegistrationEntity;
import org.springframework.data.repository.CrudRepository;
import java.util.Optional;


public interface RegistrationRepo extends CrudRepository<RegistrationEntity, Long> {
    Optional<RegistrationEntity> findByLogin(String login);
    boolean existsByLogin(String login);
}