import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Register = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    contactPerson: "",
    email: "",
    phone: "",
    businessId: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle registration
  const handleRegister = (e) => {
    e.preventDefault();

    const { businessName, contactPerson, email, phone, businessId, password, confirmPassword } =
      formData;

    if (!businessName || !contactPerson || !email || !phone || !businessId || !password || !confirmPassword) {
      alert("Please fill all fields!");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Save user details locally (demo purpose)
    localStorage.setItem("user", JSON.stringify(formData));
    localStorage.setItem("successMessage", "Registration successful! You can now log in.");

    // Redirect to success or login page
    window.location.href = "/success";
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Register for Book Fair</h2>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            name="businessName"
            placeholder="Business Name"
            value={formData.businessName}
            onChange={handleChange}
          />

          <input
            type="text"
            name="contactPerson"
            placeholder="Contact Person Name"
            value={formData.contactPerson}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />

          <input
            type="text"
            name="businessId"
            placeholder="Business Registration ID"
            value={formData.businessId}
            onChange={handleChange}
          />

          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>

          <label className="show-password-label">
            <input
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
            Show Passwords
          </label>

          <button type="submit">Register</button>

          <p style={{ marginTop: "15px" }}>
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
