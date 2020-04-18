package dev.programister.service.user;

import dev.programister.Application;
import dev.programister.entity.UserEntity;
import dev.programister.exception.user.UserRegisterException;
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
public class UserServiceTest {

    ArrayList<UserEntity> entities = new ArrayList<>();

    @Autowired
    UserService userService;

    // @MockBean
    @Autowired
    UserRepo userRepo;

    @Before
    public void prepareData() {
        entities.add(new UserEntity("name 1", "email 1", "password 1"));
        entities.add(new UserEntity("name 2", "email 2", "password 2"));

        for (var u : entities)
            userRepo.save(u);
    }

    @Test
    public void isExists() {
        assertThat(userService.isRegistered(entities.get(0)))
                .isTrue();
    }

    @Test
    public void registration() {
        assertThatExceptionOfType(UserRegisterException.class)
                .isThrownBy(() -> userService.register(entities.get(0)));
    }
}