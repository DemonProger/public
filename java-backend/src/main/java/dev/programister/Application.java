
package dev.programister;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EnableAutoConfiguration
@Configuration
// @ComponentScan
@EnableJpaRepositories
@EntityScan(basePackages = "dev.programister.entity")
@ComponentScan(basePackageClasses = {Application.class })
@EnableSwagger2
// @Import(BeanValidatorPluginsConfiguration.class)
@Import({springfox.bean.validators.configuration.BeanValidatorPluginsConfiguration.class})
public class Application {
    public  static  void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}