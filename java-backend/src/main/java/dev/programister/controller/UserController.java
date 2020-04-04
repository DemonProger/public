
package dev.programister.controller;
import dev.programister.entity.UserEntity;
import dev.programister.repository.UserRepo;
import dev.programister.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.util.List;


@RestController
@RequestMapping("/")
public class UserController {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private UserService userService;

    @PostMapping(value = "/users/register", consumes = "application/json", produces = "application/json")
    String registerUser(@Valid @RequestBody UserEntity person, HttpServletResponse response) {
        try {
            userRepo.save(person);
            List<UserEntity> users = userRepo.findByName(person.getName());
            System.out.println(users.size());
        }
        catch (Exception exc) {
            System.out.println("Ooops post mapping error " + exc);
        }
        return  "";
    }
}