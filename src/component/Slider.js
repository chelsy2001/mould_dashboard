import React from "react";
import "../styles/layout.css";
import { Link } from "react-router-dom";

// React Icons
import { FaHome, FaHistory } from "react-icons/fa";
import { MdPendingActions, MdHealthAndSafety, MdSummarize } from "react-icons/md";

function Sidebar() {
  return (
    <div className="sidebar">

      {/* LOGO SECTION */}
      <div className="sidebar-logo">
        <img
          src={require("../assets/Dalisoft Logo.jpg")}
          alt="Dalisoft Logo"
        />
      </div>

      <h2>Dashboard</h2>

      <ul>
        <li>
          <Link to="/home">
            <FaHome className="icon" /> Home
          </Link>
        </li>

        <li>
          <Link to="/mould-history">
            <FaHistory className="icon" /> Mould History
          </Link>
        </li>

        <li>
          <Link to="/pm-status">
            <MdPendingActions className="icon" /> PM Status
          </Link>
        </li>

        <li>
          <Link to="/hc-status">
            <MdHealthAndSafety className="icon" /> HC Status
          </Link>
        </li>

        <li>
          <Link to="/mould-summary">
            <MdSummarize className="icon" /> Mould Summary
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
