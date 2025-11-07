// src/components/StallReservation.js
import React, { useState } from "react";
import "./StallReservation.css";

function StallReservation() {
  const [filter, setFilter] = useState("all");
  const [showAvailable, setShowAvailable] = useState(false);

  const stalls = [
    { id: "A1", size: "Small", price: 100, available: true },
    { id: "A2", size: "Medium", price: 200, available: false },
    { id: "B1", size: "Large", price: 300, available: true },
    { id: "B2", size: "Small", price: 100, available: false },
  ];

  const filteredStalls = stalls.filter((stall) => {
    if (filter !== "all" && stall.size !== filter) return false;
    if (showAvailable && !stall.available) return false;
    return true;
  });

  return (
    <div className="stall-container">
      <h2>Reserve Your Stall</h2>

      <div className="filters">
        <select onChange={(e) => setFilter(e.target.value)} value={filter}>
          <option value="all">All Sizes</option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>

        <label>
          <input
            type="checkbox"
            checked={showAvailable}
            onChange={() => setShowAvailable(!showAvailable)}
          />
          Show only available
        </label>
      </div>

      <div className="stall-grid">
        {filteredStalls.map((stall) => (
          <div
            key={stall.id}
            className={`stall-box ${stall.available ? "available" : "reserved"}`}
            title={`ID: ${stall.id}\nSize: ${stall.size}\nPrice: $${stall.price}`}
          >
            {stall.id}
          </div>
        ))}
      </div>
    </div>
  );
}

export default StallReservation;
