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
@RequestMapping("/registration")
public class UserRegisterController {

    @Autowired
    private UserService userService;


    @GetMapping(value = "/getAll", produces = "application/json")
    @ApiOperation(value = "View a list of registered users", response = UserEntity.class)
    @ApiResponses(value = {@ApiResponse(code = HttpURLConnection.HTTP_INTERNAL_ERROR, message = "Some internal error")})
    Iterable<UserDto> getAll(HttpServletResponse response) throws  Exception {
        try {
            var res = new ArrayList<UserDto>();
            userService.getRegistered().forEach(e -> res.add(UserDto.fromEntity(e)));
            return res;
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
    void registerUser(@Valid @RequestBody UserDto data, HttpServletResponse response) throws Exception {
        try {
            var user = UserEntity.fromDto(data);
            if (userService.isRegistered(user))
                response.sendError(HttpURLConnection.HTTP_CONFLICT, "User already exists");
            userService.register(user);
        }
        catch (Exception exc) {
            response.sendError(HttpURLConnection.HTTP_INTERNAL_ERROR, "Internal server error " + exc.getMessage());
        }
    }
}
