package dev.programister.controller;

import dev.programister.entity.AuthEntity;
import dev.programister.entity.UserEntity;
import dev.programister.exception.user.UserRegisterException;
import dev.programister.repository.UserRepo;
import dev.programister.service.user.UserService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.util.ArrayList;


@RestController
@RequestMapping("/")
public class UserRegisterController {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private UserService userService;


    @GetMapping(value = "/user/getAllRegistered", produces = "application/json")
    @ApiOperation(value = "View a list of registered users", response = UserEntity.class)
    @ApiResponses(value = {@ApiResponse(code = 500, message = "Some internal error")})
    Iterable<UserEntity> getAll(HttpServletResponse response) throws  Exception {
        try {
            return userRepo.findAll();
        }
        catch (Exception exc) {
            response.sendError(500, "Internal server error " + exc.getMessage());
        }
        return new ArrayList<>();
    }


    @PostMapping(value = "/user/register", consumes = "application/json", produces = "application/json")
    @ApiOperation(value = "Register a new user into system")
    @ApiResponses(value = {
            @ApiResponse(code = 406, message = "Some user registration error"),
            @ApiResponse(code = 500, message = "Some internal error")})
    void registerUser(@Valid @RequestBody UserEntity person, HttpServletResponse response) throws Exception {
        try {
            userService.register(person);
        }
        catch (UserRegisterException exc) {
            response.sendError(406, "User registration error " + exc.getMessage());
        }
        catch (Exception exc) {
            response.sendError(500, "Internal server error " + exc.getMessage());
        }
    }
}
