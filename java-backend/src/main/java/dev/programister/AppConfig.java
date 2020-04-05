package dev.programister;


import dev.programister.service.user.UserService;
import dev.programister.service.user.UserServiceImpl;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

@Configuration
@ComponentScan("dev.programister")
@PropertySource(value = {"classpath:application.properties"})
public class AppConfig {
    @Bean
    public UserService userService() {
        return new UserServiceImpl();
    }
}
