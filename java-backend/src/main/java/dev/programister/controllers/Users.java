
package dev.programister.controllers;
import dev.programister.instances.User;
import dev.programister.repos.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

@RestController
@RequestMapping("/")
public class Users {

    @Autowired
    private UserRepo userRepo;

    @PostMapping(value = "/users/register", consumes = "application/json", produces = "application/json")
    String registerUser(@Valid @RequestBody User person, HttpServletResponse response) {
        try {
            System.out.println(person.toString());
            userRepo.save(person);
            response.sendError(404);
        }
        catch (Exception exc) {
            System.out.println(exc);
        }
        return  "";
    }
}