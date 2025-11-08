import React from "react";

const Home = () => {
  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    window.location.href = "/login";
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to the Book Fair 🎉</h1>
      <p style={styles.text}>You are successfully logged in!</p>
      <button style={styles.button} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    background: "linear-gradient(135deg, #e0f7fa, #b2ebf2)",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    fontSize: "2rem",
    color: "#333",
  },
  text: {
    marginTop: "10px",
    fontSize: "18px",
    color: "#555",
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#ff7043",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "0.3s",
  },
};

export default Home;
