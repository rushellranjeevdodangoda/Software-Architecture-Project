import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Added
import "./Login.css";

const ForgotPassword = () => {
  const [username, setUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate(); // ✅ Added this line

  const handleReset = (e) => {
    e.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser || savedUser.username !== username) {
      alert("Username not found!");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // ✅ Update password in localStorage
    localStorage.setItem(
      "user",
      JSON.stringify({ username, password: newPassword })
    );

    // ✅ Redirect to success page with message
    navigate("/success", {
      state: { message: "Password has been reset successfully!" },
    });
  };

  return (
    <div className="login-container">
      <h2>Reset Your Password</h2>
      <form onSubmit={handleReset}>
        <input
          type="text"
          placeholder="Enter your Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <div className="password-field">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>

        <div className="password-field">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Confirm New Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <label>
          <input
            type="checkbox"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />
          Show Passwords
        </label>

        <button type="submit">Reset Password</button>

        <p style={{ marginTop: "15px" }}>
          Remembered your password? <a href="/login">Login here</a>
        </p>
      </form>
    </div>
  );
};

export default ForgotPassword;
