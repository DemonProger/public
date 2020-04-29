package dev.programister.controller;

import dev.programister.dto.AuthDto;
import dev.programister.dto.UserDto;
import dev.programister.entity.AuthEntity;
import dev.programister.entity.UserEntity;
import dev.programister.exception.user.UserNotExistsException;
import dev.programister.service.user.AuthService;
import dev.programister.service.user.UserService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.net.HttpURLConnection;
import java.util.ArrayList;
import java.util.stream.Collector;
import java.util.stream.Collectors;
import java.util.stream.Stream;


@RestController
@RequestMapping("/authentification")
public class UserAuthController {

    @Autowired
    AuthService authService;

    @Autowired
    UserService userService;

    @PostMapping(value = "/login", consumes = "application/json", produces = "application/json")
    @ApiOperation(value = "Auth a user which is already exists")
    @ApiResponses(value = {
            @ApiResponse(code = HttpURLConnection.HTTP_NOT_FOUND, message = "User not exists (not registered)"),
            @ApiResponse(code = HttpURLConnection.HTTP_INTERNAL_ERROR, message = "Some internal error"),
            @ApiResponse(code = HttpURLConnection.HTTP_FORBIDDEN, message = "Invalid password")
    })
    ResponseEntity<UserDto> logInUser(@Valid @RequestBody AuthDto data)  {
        try {
            var auth = AuthEntity.fromDto(data);

            if (!userService.existsByLogin(auth.getLogin()))
                return ResponseEntity.notFound().build();

            var registered = userService.findByLogin(auth.getLogin());
            if (registered.isEmpty())
                return ResponseEntity.notFound().build();

            if (!registered.get().getPassword().equals(auth.getPassword()))
                return ResponseEntity.status(HttpURLConnection.HTTP_FORBIDDEN).build();

            authService.logIn(auth);

            return ResponseEntity.status(HttpURLConnection.HTTP_OK)
                    .body(UserDto.fromEntity(registered.get()));
        }
        catch (Exception exc) {
            return ResponseEntity.status(HttpURLConnection.HTTP_INTERNAL_ERROR).build();
        }
    }

    @GetMapping(value = "/getAll", produces = "application/json")
    @ApiOperation(value = "View a list of logged in users", response = AuthEntity.class)
    @ApiResponses(value = {@ApiResponse(code = HttpURLConnection.HTTP_INTERNAL_ERROR, message = "Some internal error")})
    Iterable<AuthDto> getLogged(HttpServletResponse response) throws Exception {
        try {
            return AuthDto.fromEntities(authService.getLooged());
        }
        catch (Exception exc) {
            response.sendError(HttpURLConnection.HTTP_INTERNAL_ERROR, "Internal error " + exc.getMessage());
        }
        return  new ArrayList<>();
    }
}
