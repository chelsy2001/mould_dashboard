import React, { useState } from "react";
import "../styles/ModeContainer.css";

function ModeContainer() {
  const [active, setActive] = useState("Shift");

  return (
    <div className="mode-container">
      <div className="filter-buttons">
        {["Shift", "Day", "Week", "Month"].map((item) => (
          <button
            key={item}
            className={`mode-btn ${active === item ? "active" : ""}`}
            onClick={() => setActive(item)}
          >
            {item}
          </button>
        ))}

        <button className="date-btn">
          Select Date Range 📅
        </button>
      </div>

      <p className="running-shift">
        Running Shift : <span>A</span>
      </p>
    </div>
  );
}

export default ModeContainer;
