package dev.programister.component.registration.test;

import dev.programister.Application;
import dev.programister.component.registration.RegistrationRepo;
import dev.programister.component.registration.data.RegistrationEntity;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.support.AnnotationConfigContextLoader;
import org.springframework.transaction.annotation.Transactional;
import static org.assertj.core.api.Assertions.assertThat;
import java.util.ArrayList;
import java.util.Optional;
import java.util.stream.Stream;


@RunWith(SpringJUnit4ClassRunner.class)
// @SpringBootTest
@Transactional
@ContextConfiguration(classes = Application.class, loader = AnnotationConfigContextLoader.class)
public class RegistrationRepoTest {

    @Autowired
    RegistrationRepo registrationRepo;

    ArrayList<RegistrationEntity> entities = new ArrayList<>();

    String TEST_LOGIN = "test_login";


    @Before
    public void before() {
        var entity = new RegistrationEntity()
                .builder()
                .login(TEST_LOGIN)
                .password("test password")
                .email("test email")
                .build();
        entities.add(entity);
    }


    @Test
    public void registration() {
        entities.forEach(e -> registrationRepo.save(e));

        var size = Stream.of(registrationRepo.findAll())
                .count();

        assertThat(size)
                .isEqualTo(entities.size());
    }


    @Test
    public void isRegistered() {
        assertThat(registrationRepo.existsByLogin(TEST_LOGIN))
                .isTrue();
    }


    @Test
    public void findByLogin() {
        assertThat(registrationRepo.findByLogin(TEST_LOGIN))
                .isNotEqualTo(Optional.empty());
    }
}
