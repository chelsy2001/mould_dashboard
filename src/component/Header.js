import React, { useState } from "react";
import "../styles/Header.css";

function Header({ title }) {
  const [dark, setDark] = useState(false);

  return (
    <div className={`header-bar ${dark ? "dark-mode" : ""}`}>
      <h3>{title}</h3>

      <div className="header-right">
        {/* Dark Mode Toggle */}
        <div 
          className={`dark-toggle ${dark ? "active" : ""}`} 
          onClick={() => setDark(!dark)}
        >
          <div className="toggle-circle"></div>
        </div>

        {/* Username Section */}
        <div className="user-info">
          <span className="user-icon">👤</span>
          <span className="username">Vishal</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
