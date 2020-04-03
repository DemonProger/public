package dev.programister.repos;

import dev.programister.instances.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepo extends CrudRepository<User, Long> { }
