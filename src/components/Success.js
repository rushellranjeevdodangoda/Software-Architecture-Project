import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Login.css";

const Success = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get message from where the user came
  const message = location.state?.message || "Action completed successfully!";

  return (
    <div className="login-container">
      <div style={styles.card}>
        <h2 style={styles.title}>✅ Success!</h2>
        <p style={styles.message}>{message}</p>
        <button style={styles.button} onClick={() => navigate("/login")}>
          Go to Login
        </button>
      </div>
    </div>
  );
};

const styles = {
  card: {
    background: "#fff",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    textAlign: "center",
    width: "350px",
  },
  title: {
    color: "#28a745",
    marginBottom: "15px",
  },
  message: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "25px",
  },
  button: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    padding: "10px 20px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default Success;
