package dev.programister.component.authorization;

import dev.programister.component.authorization.data.AuthDto;
import dev.programister.component.authorization.data.AuthEntity;
import dev.programister.component.authorization.impl.AuthServiceImpl;
import dev.programister.component.registration.data.RegistrationDto;
import dev.programister.component.registration.impl.RegistrationServiceImpl;
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


@RestController
@RequestMapping("/authozization")
public class AuthController {

    @Autowired
    AuthServiceImpl authService;

    @Autowired
    RegistrationServiceImpl userService;

    @PostMapping(value = "/authorize", consumes = "application/json", produces = "application/json")
    @ApiOperation(value = "Auth a user which is already exists")
    @ApiResponses(value = {
            @ApiResponse(code = HttpURLConnection.HTTP_NOT_FOUND, message = "User not exists (not registered)"),
            @ApiResponse(code = HttpURLConnection.HTTP_INTERNAL_ERROR, message = "Some internal error"),
            @ApiResponse(code = HttpURLConnection.HTTP_FORBIDDEN, message = "Invalid password")
    })
    ResponseEntity<RegistrationDto> logInUser(@Valid @RequestBody AuthDto data)  {
        try {
            var auth = AuthEntity.fromDto(data);

            if (!userService.existsByLogin(auth.getLogin()))
                return ResponseEntity.notFound().build();

            var registered = userService.findByLogin(auth.getLogin());
            if (registered.isEmpty())
                return ResponseEntity.notFound().build();

            if (!registered.get().getPassword().equals(auth.getPassword()))
                return ResponseEntity.status(HttpURLConnection.HTTP_FORBIDDEN).build();

            authService.authorize(auth);

            return ResponseEntity.status(HttpURLConnection.HTTP_OK)
                    .body(RegistrationDto.fromEntity(registered.get()));
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
            return AuthDto.fromEntities(authService.getAuthorized());
        }
        catch (Exception exc) {
            response.sendError(HttpURLConnection.HTTP_INTERNAL_ERROR, "Internal error " + exc.getMessage());
        }
        return  new ArrayList<>();
    }
}
