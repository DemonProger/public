package dev.programister.component.registration.test;

import dev.programister.Application;
import dev.programister.component.authorization.AuthRepo;
import dev.programister.component.authorization.data.AuthEntity;
import dev.programister.component.registration.RegistrationService;
import dev.programister.component.registration.impl.RegistrationServiceImpl;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.support.AnnotationConfigContextLoader;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest
@Transactional
@ContextConfiguration(classes = Application.class, loader = AnnotationConfigContextLoader.class)
public class RegistrationServiceTest {

    @Autowired
    RegistrationServiceImpl registrationService;

    ArrayList<AuthEntity> entities = new ArrayList<>();

    @Before
    public void before() {
        entities.add(new AuthEntity()); // "login", "password"));
    }

    //    @Test
//    public void adding() {
//        for (var authInfo : entities)
//            authRepo.save(authInfo);
//        assertThat(authRepo.count()).isEqualTo(entities.size());
//    }
//
    @Test
    public void existsByLogin() {
//        authRepo.save(new AuthEntity("login", "password"));
//        assertThat(authRepo.existsByLogin("login")).isTrue();
    }
//
//    @Test
//    public void deleteByLogin() {
//        authRepo.deleteByLogin("login");
//        assertThat(authRepo.count())
//                .isEqualTo(entities.size() - 1);
//    }
}
