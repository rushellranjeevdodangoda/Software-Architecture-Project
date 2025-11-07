# Bookfair Backend (Monolith) - Scaffold

This repository is a generated scaffold for the Bookfair backend (Spring Boot monolithic project).
It includes layered structure suitable for team work across 3 developers:
- Auth & User Management
- Stall & Reservation Management
- Admin/Employee features

## How to run locally

1. Create a PostgreSQL database:
   - database: bookfair_db
   - user: bookfair_admin
   - password: password

2. Update `src/main/resources/application.yml` mail and datasource details.

3. Build and run (requires Java 21):
   ```powershell
   # Make sure Java 21 is installed and JAVA_HOME is set
   mvn -v
   mvn clean package
   mvn spring-boot:run
   ```

4. API docs: http://localhost:8080/swagger-ui/index.html

