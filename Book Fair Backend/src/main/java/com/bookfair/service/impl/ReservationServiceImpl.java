package com.bookfair.service.impl;

import com.bookfair.dto.ReservationRequest;
import com.bookfair.dto.ReservationResponse;
import com.bookfair.entity.Reservation;
import com.bookfair.repository.ReservationRepository;
import com.bookfair.service.ReservationService;
import com.bookfair.util.QRCodeGenerator;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Objects;

@Service
public class ReservationServiceImpl implements ReservationService {

    private final ReservationRepository reservationRepository;
    private final QRCodeGenerator qrCodeGenerator;

    public ReservationServiceImpl(ReservationRepository reservationRepository, QRCodeGenerator qrCodeGenerator) {
        this.reservationRepository = reservationRepository;
        this.qrCodeGenerator = qrCodeGenerator;
    }

    @Override
    @Transactional
    public ReservationResponse createReservation(ReservationRequest req) {
        Objects.requireNonNull(req, "ReservationRequest cannot be null");

        Reservation reservation = new Reservation();
        reservation.setBusinessId(Objects.requireNonNull(req.businessId, "Business ID is required"));
        reservation.setUserId(Objects.requireNonNull(req.userId, "User ID is required"));

        if (req.stallIds != null && !req.stallIds.isEmpty()) {
            reservation.setStallId(req.stallIds.get(0));
        }

        Reservation saved = reservationRepository.save(reservation);

        ReservationResponse response = new ReservationResponse();
        response.reservationId = saved.getId();
        response.status = saved.getStatus();

        return response;
    }

    @Override
    public void confirmReservation(String reservationId) {
        if (reservationId == null || reservationId.trim().isEmpty()) {
            throw new IllegalArgumentException("Reservation ID cannot be null or empty");
        }

        Reservation reservation = reservationRepository.findById(reservationId)
                .orElseThrow(() -> new RuntimeException("Reservation not found"));

        reservation.setStatus("CONFIRMED");
        reservationRepository.save(reservation);

        // Generate QR (placeholder)
        qrCodeGenerator.generateForReservation(reservation);
    }
}
