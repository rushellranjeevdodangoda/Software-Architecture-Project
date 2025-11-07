package com.bookfair.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    @GetMapping("/health")
    public ResponseEntity<String> health(){
        return ResponseEntity.ok("admin ok");
    }
}
