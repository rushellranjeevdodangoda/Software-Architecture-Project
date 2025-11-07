package com.bookfair.service;

import com.bookfair.dto.ReservationRequest;
import com.bookfair.dto.ReservationResponse;

public interface ReservationService {
    ReservationResponse createReservation(ReservationRequest req);
    void confirmReservation(String reservationId);
}
