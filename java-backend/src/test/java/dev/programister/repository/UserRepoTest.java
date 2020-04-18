package dev.programister.repository;

import dev.programister.Application;
import dev.programister.entity.UserEntity;
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

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest
@EnableAutoConfiguration
@ContextConfiguration(classes = Application.class, loader = AnnotationConfigContextLoader.class)
public class UserRepoTest {

    ArrayList<UserEntity> entities = new ArrayList<>();

    // @MockBean
    @Autowired
    UserRepo userRepo;

    @Before
    public void prepareData() {
        entities.add(new UserEntity("name 1", "email 1", "password 1"));
        entities.add(new UserEntity("name 2", "email 2", "password 2"));
    }

    @Test
    public void adding() {
        for (var user : entities)
            userRepo.save(user);
        assertThat(userRepo.count()).isEqualTo(entities.size());
    }

    @Test
    public void searchByLogin() {
        assertThat(userRepo.findByLogin("name 1"))
                .isNotEmpty();
    }

    @Test
    public void existsByLogin() {
        assertThat(userRepo.existsByLogin("name 1"))
                .isTrue();
    }
}
