package com.ecf.hatebook.services;

import com.ecf.hatebook.dtos.UserDto;
import com.ecf.hatebook.entities.User;

import java.util.List;

public interface UserService {

    void createUser(String email, String firstname, String lastname, String password);
    User getUser(String email);
}
