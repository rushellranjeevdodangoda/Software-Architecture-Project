package com.bookfair.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.util.UUID;
import lombok.*;

@Data
@Entity
@Table(name = "qrcodes")
public class QRCodeEntity {
    @Id
    private String id = UUID.randomUUID().toString();
    private String reservationId;
    private String codeData;
    private String imageBase64;
}
