package com.bookfair.repository;

import com.bookfair.entity.Stall;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StallRepository extends JpaRepository<Stall, String> {
}
