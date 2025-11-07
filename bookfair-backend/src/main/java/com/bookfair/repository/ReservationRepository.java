package com.bookfair.repository;

import com.bookfair.entity.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReservationRepository extends JpaRepository<Reservation, String> {
    List<Reservation> findByBusinessIdAndStatus(String businessId, String status);
}
