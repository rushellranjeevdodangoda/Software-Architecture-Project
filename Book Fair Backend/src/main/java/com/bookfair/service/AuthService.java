package com.bookfair.service;

import com.bookfair.dto.LoginRequest;
import com.bookfair.dto.RegisterRequest;
import com.bookfair.dto.AuthResponse;

public interface AuthService {
    void register(RegisterRequest req);
    AuthResponse login(LoginRequest req);
}
