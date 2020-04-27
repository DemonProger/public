package dev.programister.controller;

import dev.programister.dto.UserDto;
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
import java.net.HttpURLConnection;
import java.util.ArrayList;


@RestController
@RequestMapping("/user")
public class UserRegisterController {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private UserService userService;


    @GetMapping(value = "/getAllRegistered", produces = "application/json")
    @ApiOperation(value = "View a list of registered users", response = UserEntity.class)
    @ApiResponses(value = {@ApiResponse(code = HttpURLConnection.HTTP_INTERNAL_ERROR, message = "Some internal error")})
    Iterable<UserEntity> getAll(HttpServletResponse response) throws  Exception {
        try {
            return userRepo.findAll();
        }
        catch (Exception exc) {
            response.sendError(HttpURLConnection.HTTP_INTERNAL_ERROR, "Internal server error " + exc.getMessage());
        }
        return new ArrayList<>();
    }


    @PostMapping(value = "/register", consumes = "application/json", produces = "application/json")
    @ApiOperation(value = "Register a new user into system")
    @ApiResponses(value = {
            @ApiResponse(code = HttpURLConnection.HTTP_CONFLICT, message = "Some user registration error"),
            @ApiResponse(code = HttpURLConnection.HTTP_INTERNAL_ERROR, message = "Some internal error")})
    void registerUser(@Valid @RequestBody UserDto person, HttpServletResponse response) throws Exception {
        try {
            userService.register(person.toEntity());
        }
        catch (UserRegisterException exc) {
            response.sendError(HttpURLConnection.HTTP_CONFLICT, "User registration error " + exc.getMessage());
        }
        catch (Exception exc) {
            response.sendError(HttpURLConnection.HTTP_INTERNAL_ERROR, "Internal server error " + exc.getMessage());
        }
    }
}
