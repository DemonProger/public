package dev.programister.repository;

import dev.programister.AppConfig;
import dev.programister.entity.UserEntity;
import dev.programister.repository.UserRepo;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.support.AnnotationConfigContextLoader;

import java.util.ArrayList;
import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest
@ContextConfiguration(classes = AppConfig.class, loader = AnnotationConfigContextLoader.class)
public class UserRepoTest {

    ArrayList<UserEntity> entities = new ArrayList<>();

    @MockBean
    UserRepo userRepo;

//    @BeforeAll
//    void prepareData() {
//        entities.add(new UserEntity("name 1", "email 1", "password 1"));
//        entities.add(new UserEntity("name 2", "email 2", "password 2"));
//    }

    @Test
    public void adding() {
        System.out.println("User repo test hello");
        assertThat(userRepo.count()).isNotNull();
        userRepo.save(new UserEntity("name from test", "email", "password"));
    }
}
