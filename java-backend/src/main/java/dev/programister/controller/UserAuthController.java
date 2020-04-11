package dev.programister.controller;

import dev.programister.entity.AuthEntity;
import dev.programister.entity.UserEntity;
import dev.programister.exception.user.UserNotExistsException;
import dev.programister.exception.user.UserRegisterException;
import dev.programister.service.user.AuthService;
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
public class UserAuthController {

    @Autowired
    AuthService authService;

    @PostMapping(value = "/user/login", consumes = "application/json", produces = "application/json")
    @ApiOperation(value = "Auth a user which is already exists")
    @ApiResponses(value = {
            @ApiResponse(code = 406, message = "User not exists (not registered)"),
            @ApiResponse(code = 500, message = "Some internal error")})
    void logInUser(@Valid @RequestBody AuthEntity person, HttpServletResponse response) throws Exception {
        try {
            authService.logIn(person);
        }
        catch (UserNotExistsException exc) {
            response.sendError(406, "User not exists");
        }
        catch (Exception exc) {
            response.sendError(500, "Internal server error " + exc.getMessage());
        }
    }

    @GetMapping(value = "/user/getLogged", produces = "application/json")
    @ApiOperation(value = "View a list of logged in users", response = AuthEntity.class)
    @ApiResponses(value = {@ApiResponse(code = 500, message = "Some internal error")})
    Iterable<AuthEntity> getLogged(HttpServletResponse response)  throws  Exception {
        try {
            return authService.getLooged();
        }
        catch (Exception exc) {
            response.sendError(500, "Internal error " + exc.getMessage());
        }
        return  new ArrayList<>();
    }
}
