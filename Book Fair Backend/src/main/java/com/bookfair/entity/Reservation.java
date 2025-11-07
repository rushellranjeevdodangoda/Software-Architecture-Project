package com.bookfair.entity;

import jakarta.persistence.*;
import java.time.Instant;
import java.util.UUID;
import lombok.*;

@Data
@Entity
@Table(name = "reservations")
public class Reservation {
    @Id
    private String id = UUID.randomUUID().toString();

    private String businessId;
    private String userId;
    private String stallId;
    private String status = "PENDING";
    private Instant createdAt = Instant.now();
}
