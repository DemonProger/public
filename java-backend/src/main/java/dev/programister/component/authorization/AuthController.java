package dev.programister.component.authorization;

import dev.programister.component.authorization.data.AuthDto;
import dev.programister.component.authorization.data.AuthEntity;
import dev.programister.component.authorization.data.AuthResponse;
import dev.programister.component.authorization.impl.AuthServiceImpl;
import dev.programister.component.registration.impl.RegistrationServiceImpl;
import dev.programister.component.authorization.jwt.JwtTokenProvider;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.LockedException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.net.HttpURLConnection;
import java.util.ArrayList;


@RestController
@RequestMapping("/authorization")
public class AuthController {

    private final AuthServiceImpl authService;

    private final AuthenticationManager authManager;

    private final JwtTokenProvider tokenProvider;

    private final RegistrationServiceImpl registrationService;


    @Autowired
    public AuthController(RegistrationServiceImpl registrationService,
                          AuthServiceImpl authService,
                          AuthenticationManager authManager,
                          JwtTokenProvider tokenProvider,
                          RegistrationServiceImpl registrationService1) {
        this.authService = authService;
        this.authManager = authManager;
        this.tokenProvider = tokenProvider;
        this.registrationService = registrationService1;
    }



    @PostMapping(value = "/authorize", consumes = "application/json", produces = "application/json")
    @ApiOperation(value = "Auth a user which is already exists")
    @ApiResponses(value = {
            @ApiResponse(code = HttpURLConnection.HTTP_NOT_FOUND, message = "User not exists (not registered)"),
            @ApiResponse(code = HttpURLConnection.HTTP_INTERNAL_ERROR, message = "Some internal error"),
            @ApiResponse(code = HttpURLConnection.HTTP_FORBIDDEN, message = "Invalid password")})
    ResponseEntity<AuthResponse> authorize(@Valid @RequestBody AuthDto data)  {
        try {
            var auth = AuthEntity.fromDto(data);

            if (!registrationService.isRegistered(auth.getLogin()))
                return ResponseEntity.notFound().build();

            var registered = registrationService.findByLogin(auth.getLogin());
            if (registered.isEmpty())
                return ResponseEntity.notFound().build();

            var login = registered.get().getLogin();
            var password = data.getPassword();
            var authToken = new UsernamePasswordAuthenticationToken(login, password);
            authManager.authenticate(authToken);
            var token = tokenProvider.createToken(login, registered.get().getRoles());

            authService.saveAuthorized(auth);

            return ResponseEntity.status(HttpURLConnection.HTTP_OK)
                    .body(new AuthResponse(token));
        }
        catch (BadCredentialsException exc) {
            System.out.println(exc);
            return ResponseEntity.status(HttpURLConnection.HTTP_FORBIDDEN).build();
        }
        catch (LockedException exc) {
            System.out.println(exc);
            return ResponseEntity.status(HttpURLConnection.HTTP_NOT_ACCEPTABLE).build();
        }
        catch (Exception exc) {
            System.out.println(exc);
            return ResponseEntity.status(HttpURLConnection.HTTP_INTERNAL_ERROR).build();
        }
    }


    @GetMapping(value = "/all", produces = "application/json")
    @ApiOperation(value = "View a list of logged in users", response = AuthEntity.class)
    @ApiResponses(value = {@ApiResponse(code = HttpURLConnection.HTTP_INTERNAL_ERROR, message = "Some internal error")})
    Iterable<AuthDto> getAuthorized(HttpServletResponse response) throws Exception {
        try {
            return AuthDto.fromEntities(authService.getAuthorized());
        }
        catch (Exception exc) {
            response.sendError(HttpURLConnection.HTTP_INTERNAL_ERROR, "Internal error " + exc.getMessage());
        }
        return  new ArrayList<>();
    }
}
