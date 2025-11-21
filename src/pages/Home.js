import React from "react";
import Sidebar from "../component/Slider";
import Header from "../component/Header";
import ModeContainer from "../component/ModeContainer";

function Home() {
  return (
    <div className="page-container">
      <Sidebar />

      <div className="page-content">
        {/* Header with username & dark mode */}
        <Header title="Home" />

        {/* ModeContainer (Shift, Day, Week, Month, Date Range) */}
        <ModeContainer />

        {/* Main Content */}
        <div className="content-box">
          <h2>Home Dashboard</h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
