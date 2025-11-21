import React from "react";
import Sidebar from "../component/Slider";
import Header from "../component/Header";

function MouldHistory() {
  return (
    <div className="page-container">
      <Sidebar />
      <div className="page-content">
        <Header
          title="Mould History"
          filters={{ dateRange: true }}
        />

        <div className="content-box">
          <h2>PM Screen | HC Screen | Spare Part | Breakdown</h2>
        </div>
      </div>
    </div>
  );
}

export default MouldHistory;
