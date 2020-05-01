
package dev.programister.config;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.context.annotation.*;

@RunWith(Suite.class)
// @Suite.SuiteClasses({UserRepoTest.class, AuthRepoTest.class})
@PropertySource(value = {"classpath:application.properties"})
@TestConfiguration
public class UnitTest {
//    @Primary
//    @Bean
//    public RegistrationRepo userRepo() {
//        return Mockito.mock(RegistrationRepo.class);
//    }
}
