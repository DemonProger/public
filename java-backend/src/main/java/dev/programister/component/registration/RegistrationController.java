package dev.programister.component.registration;

import dev.programister.component.registration.data.RegistrationDto;
import dev.programister.component.registration.data.RegistrationEntity;
import dev.programister.component.registration.data.UnregisterDto;
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
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/registration")
public class RegistrationController {

    private final RegistrationServiceImpl registrationService;

    @Autowired
    public RegistrationController(RegistrationServiceImpl registrationService) {
        this.registrationService = registrationService;
    }


    // @CrossOrigin(origins = "http://localhost:8080/registration/all", methods = { "GET" })
    @GetMapping(value = "/all", produces = "application/json")
    @ApiOperation(value = "View a list of registered users", response = RegistrationEntity.class)
    @ApiResponses(value = {@ApiResponse(code = HttpURLConnection.HTTP_INTERNAL_ERROR, message = "Some internal error")})
    Iterable<RegistrationDto> getAll(HttpServletResponse response) throws  Exception {
        try {
            var res = new ArrayList<RegistrationDto>();
            registrationService.findAll().forEach(e -> res.add(RegistrationDto.fromEntity(e)));
            return res;
        }
        catch (Exception exc) {
            System.out.println(exc);
            response.sendError(HttpURLConnection.HTTP_INTERNAL_ERROR, "Internal server error " + exc.getMessage());
        }
        return new ArrayList<>();
    }


    @PostMapping(value = "/register", consumes = "application/json", produces = "application/json")
    @ApiOperation(value = "Register a new user into system")
    @ApiResponses(value = {
            @ApiResponse(code = HttpURLConnection.HTTP_CONFLICT, message = "Some user registration error"),
            @ApiResponse(code = HttpURLConnection.HTTP_INTERNAL_ERROR, message = "Some internal error")})
    void register(@Valid @RequestBody RegistrationDto data, HttpServletResponse response) throws Exception {
        try {
            var user = RegistrationEntity.fromDto(data);
            if (registrationService.isRegistered(user.getLogin()))
                response.sendError(HttpURLConnection.HTTP_CONFLICT, "User already exists");
            else
                registrationService.register(user);
        }
        catch (Exception exc) {
            System.out.println(exc);
            response.sendError(HttpURLConnection.HTTP_INTERNAL_ERROR, "Internal server error " + exc.getMessage());
        }
    }


    @PostMapping(value = "/delete", consumes = "application/json")
    @ApiOperation(value = "Delete registered user")
    ResponseEntity deleteRegistration(@Valid @RequestBody UnregisterDto info) throws Exception {
        try {
            registrationService.deleteByLogin(info.getLogin());
            return ResponseEntity.ok("ok");
        }
        catch (Exception exc) {
            System.out.println(exc);
            return ResponseEntity.status(HttpURLConnection.HTTP_INTERNAL_ERROR).body(exc);
        }
    }
}
