package com.bookfair.service.impl;

import com.bookfair.dto.AuthResponse;
import com.bookfair.dto.LoginRequest;
import com.bookfair.dto.RegisterRequest;
import com.bookfair.entity.User;
import com.bookfair.repository.UserRepository;
import com.bookfair.service.AuthService;
import com.bookfair.util.JwtUtils;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;
    private final JwtUtils jwtUtils;

    public AuthServiceImpl(UserRepository userRepository, BCryptPasswordEncoder passwordEncoder, JwtUtils jwtUtils){
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtUtils = jwtUtils;
    }

    @Override
    public void register(RegisterRequest req) {
        User u = new User();
        u.setName(req.name);
        u.setEmail(req.email);
        u.setPassword(passwordEncoder.encode(req.password));
        u.setRole("USER");
        userRepository.save(u);
    }

    @Override
    public AuthResponse login(LoginRequest req) {
        User u = userRepository.findByEmail(req.email).orElseThrow(() -> new RuntimeException("Invalid credentials"));
        if(!passwordEncoder.matches(req.password, u.getPassword())){
            throw new RuntimeException("Invalid credentials");
        }
        AuthResponse r = new AuthResponse();
        r.accessToken = jwtUtils.generateToken(u.getId(), u.getRole());
        return r;
    }
}
