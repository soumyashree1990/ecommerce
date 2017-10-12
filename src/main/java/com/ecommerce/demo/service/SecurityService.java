package com.ecommerce.demo.service;

public interface SecurityService {
    String findLoggedInUsername();

    void autologin(String username, String passwordConfirm);
}
