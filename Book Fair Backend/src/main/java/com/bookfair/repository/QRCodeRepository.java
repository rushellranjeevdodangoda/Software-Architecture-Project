package com.bookfair.repository;

import com.bookfair.entity.QRCodeEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QRCodeRepository extends JpaRepository<QRCodeEntity, String> {
}
