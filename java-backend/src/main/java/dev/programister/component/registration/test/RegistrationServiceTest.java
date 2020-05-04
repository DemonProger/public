package dev.programister.component.registration.test;

import dev.programister.Application;
import dev.programister.component.registration.data.RegistrationEntity;
import dev.programister.component.registration.impl.RegistrationServiceImpl;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.assertj.core.api.Assertions.assertThat;
import java.util.ArrayList;
import java.util.Optional;
import java.util.stream.Stream;


//@RunWith(SpringJUnit4ClassRunner.class)
//@SpringBootTest
//@Transactional
//@ContextConfiguration(classes = Application.class, loader = AnnotationConfigContextLoader.class)

@RunWith(SpringRunner.class)
@SpringBootTest(classes = Application.class)
public class RegistrationServiceTest {

    @Autowired
    RegistrationServiceImpl registrationService;

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
        entities.forEach(e -> registrationService.register(e));

        var size = Stream.of(registrationService.findAll())
                .count();

        assertThat(size)
                .isEqualTo(entities.size());
    }


    @Test
    public void isRegistered() {
        assertThat(registrationService.isRegistered(TEST_LOGIN))
                .isTrue();
    }


    @Test
    public void findByLogin() {
        assertThat(registrationService.findByLogin(TEST_LOGIN))
                .isNotEqualTo(Optional.empty());
    }
}
