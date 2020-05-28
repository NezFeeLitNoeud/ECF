package com.ecf.hatebook.controllers;

import com.ecf.hatebook.dtos.UserDto;
import com.ecf.hatebook.entities.User;
import com.ecf.hatebook.repositories.UserRepository;
import com.ecf.hatebook.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.security.Principal;
import java.util.Base64;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/users")
public class UserControllers {

    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;


    @PostMapping("")
    public void register(@RequestBody @Valid UserDto user) {
            userService.createUser(user.getEmail(), user.getFirstname(), user.getLastname(), user.getPassword());
    }


    @PostMapping("/login")
    public boolean login(@RequestBody UserDto user){
        User userBDD = userRepository.findByEmail(user.getEmail());
        System.out.println("Email in BDD : " + userBDD.getEmail());
        System.out.println("MDP in BDD : " + userBDD.getPassword());
        System.out.println("Email in request : " + user.getEmail());
        System.out.println("MDP in request : " + user.getPassword());


        return user.getEmail().equals(userBDD.getEmail()) && user.getPassword().equals(userBDD.getPassword());

    }

    @GetMapping("/{email}")
    public User findUser(@PathVariable("email") String email){
    return userService.getUser(email);

    }




}
