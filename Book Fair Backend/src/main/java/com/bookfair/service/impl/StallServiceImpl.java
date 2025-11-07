package com.bookfair.service.impl;

import com.bookfair.dto.StallDto;
import com.bookfair.entity.Stall;
import com.bookfair.repository.StallRepository;
import com.bookfair.service.StallService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class StallServiceImpl implements StallService {

    private final StallRepository stallRepository;

    public StallServiceImpl(StallRepository stallRepository){
        this.stallRepository = stallRepository;
    }

    @Override
    public List<StallDto> listAll() {
        return stallRepository.findAll().stream().map(this::toDto).collect(Collectors.toList());
    }

    @Override
    public StallDto create(StallDto dto) {
        Stall s = new Stall();
        s.setName(dto.name);
        s.setSize(dto.size);
        s.setMapX(dto.mapX);
        s.setMapY(dto.mapY);
        Stall saved = stallRepository.save(s);
        return toDto(saved);
    }

    private StallDto toDto(Stall s){
        StallDto d = new StallDto();
        d.id = s.getId();
        d.name = s.getName();
        d.size = s.getSize();
        d.status = s.getStatus();
        d.mapX = s.getMapX();
        d.mapY = s.getMapY();
        return d;
    }
}
