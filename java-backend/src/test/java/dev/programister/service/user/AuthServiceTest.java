package dev.programister.service.user;

import dev.programister.Application;
import dev.programister.entity.AuthEntity;
import dev.programister.entity.UserEntity;
import dev.programister.exception.user.UserRegisterException;
import dev.programister.repository.AuthRepo;
import dev.programister.repository.UserRepo;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.support.AnnotationConfigContextLoader;

import java.util.ArrayList;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatExceptionOfType;


@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest
@EnableAutoConfiguration
@ContextConfiguration(classes = Application.class, loader = AnnotationConfigContextLoader.class)
public class AuthServiceTest {

    ArrayList<AuthEntity> entities = new ArrayList<>();

    @Autowired
    AuthService authService;

    // @MockBean
    @Autowired
    AuthRepo authRepo;

    @Before
    public void prepareData() {

    }

    @Test
    public void isExists() {

    }
}