import React from "react";

const Card = ({ title, description, onClick }) => {
  return (
    <div style={styles.card} onClick={onClick}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: "#fff",
    padding: "20px",
    margin: "15px",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    cursor: "pointer",
    flex: 1,
    minWidth: "200px",
    maxWidth: "300px",
  },
};

export default Card;
