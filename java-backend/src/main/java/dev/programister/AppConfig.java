
package dev.programister;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

@Configuration
@ComponentScan("dev.programister")
@PropertySource(value = {"classpath:application.properties"})
public class AppConfig {

}
