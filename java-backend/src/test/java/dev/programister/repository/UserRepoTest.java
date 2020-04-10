package dev.programister.repository;

import dev.programister.AppConfig;
import dev.programister.entity.UserEntity;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.support.AnnotationConfigContextLoader;

import java.util.ArrayList;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest
@ContextConfiguration(classes = AppConfig.class, loader = AnnotationConfigContextLoader.class)
public class UserRepoTest {

    ArrayList<UserEntity> entities = new ArrayList<>();

    @MockBean
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
//        assertThat(userRepo.count()).isEqualTo(entities.size());
    }
}
