package com.bookfair.controller;

import com.bookfair.dto.StallDto;
import com.bookfair.service.StallService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/stalls")
public class StallController {

    private final StallService stallService;

    public StallController(StallService stallService){
        this.stallService = stallService;
    }

    @GetMapping
    public ResponseEntity<List<StallDto>> list(){
        return ResponseEntity.ok(stallService.listAll());
    }

    @PostMapping
    public ResponseEntity<StallDto> create(@RequestBody StallDto dto){
        return ResponseEntity.ok(stallService.create(dto));
    }
}
