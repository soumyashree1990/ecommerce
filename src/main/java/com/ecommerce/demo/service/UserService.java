package com.ecommerce.demo.service;

import com.ecommerce.demo.model.User;

public interface UserService {
    User findByUsername(String username);

    void save(User userForm);
}
