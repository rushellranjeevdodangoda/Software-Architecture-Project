# Developer task split

- Dev A (Auth & User Management)
  - package: com.bookfair.controller (AuthController), com.bookfair.service (AuthService), com.bookfair.entity.User, com.bookfair.repository.UserRepository, com.bookfair.util.JwtUtils, SecurityConfig
  - implement registration with email verification, password reset

- Dev B (Stall & Reservation)
  - package: com.bookfair.controller (StallController, ReservationController), com.bookfair.service (StallService, ReservationService), com.bookfair.entity (Stall, Reservation, Business, QRCodeEntity)
  - implement business rule: max 3 reservations per business, locking, QR email

- Dev C (Admin & Reporting)
  - package: com.bookfair.controller (AdminController), com.bookfair.service.AdminService, com.bookfair.entity.Audit
  - implement employee role management, reporting endpoints
