package dev.programister.controllers;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class User {
    @RequestMapping("/users/register")
    @ResponseBody
    String hello() {
        return  "Hello world!!!";
    }
}