package dev.programister.component.registration;

import dev.programister.component.registration.data.RegistrationDto;
import dev.programister.component.registration.data.RegistrationEntity;
import dev.programister.component.registration.impl.RegistrationServiceImpl;
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
public class RegistrationController {

    @Autowired
    private RegistrationServiceImpl userService;


    @GetMapping(value = "/all", produces = "application/json")
    @ApiOperation(value = "View a list of registered users", response = RegistrationEntity.class)
    @ApiResponses(value = {@ApiResponse(code = HttpURLConnection.HTTP_INTERNAL_ERROR, message = "Some internal error")})
    Iterable<RegistrationDto> getAll(HttpServletResponse response) throws  Exception {
        try {
            var res = new ArrayList<RegistrationDto>();
            userService.getRegistered().forEach(e -> res.add(RegistrationDto.fromEntity(e)));
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
    void registerUser(@Valid @RequestBody RegistrationDto data, HttpServletResponse response) throws Exception {
        try {
            var user = RegistrationEntity.fromDto(data);
            if (userService.isRegistered(user.getLogin()))
                response.sendError(HttpURLConnection.HTTP_CONFLICT, "User already exists");
            userService.register(user);
        }
        catch (Exception exc) {
            response.sendError(HttpURLConnection.HTTP_INTERNAL_ERROR, "Internal server error " + exc.getMessage());
        }
    }
}
