package dev.programister;

import dev.programister.repository.UserRepoTest;
import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.context.annotation.*;


@Profile("IntegrationTest")
@RunWith(Suite.class)
@Suite.SuiteClasses({UserRepoTest.class})
@Configuration
@ComponentScan("dev.programister")
@PropertySource(value = {"classpath:application.properties"})
@TestConfiguration
public class IntegrationTestSuite { }

