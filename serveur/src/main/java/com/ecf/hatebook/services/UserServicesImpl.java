package com.ecf.hatebook.services;

import com.ecf.hatebook.dtos.UserDto;
import com.ecf.hatebook.entities.User;
import com.ecf.hatebook.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServicesImpl implements UserService {

    @Autowired
    private UserRepository userRepository;


    @Override
    public void createUser(String email,String firstname, String lastname, String password) {
        User user  = new User(email, firstname, lastname, password);

            userRepository.save(user);
    }

    @Override
    public User getUser(String email){

    return userRepository.findByEmail(email);

    }
}
