
package dev.programister;

import dev.programister.repository.UserRepo;
import dev.programister.repository.UserRepoTest;
import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.mockito.Mockito;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.context.annotation.*;

@RunWith(Suite.class)
@Suite.SuiteClasses({UserRepoTest.class})
@PropertySource(value = {"classpath:application.properties"})
@TestConfiguration
public class UnitTestSuite {
    @Primary
    @Bean
    public UserRepo userRepo() {
        return Mockito.mock(UserRepo.class);
    }
}
