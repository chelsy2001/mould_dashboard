import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import MouldHistory from "./pages/MouldHistory";
import MouldSummary from "./pages/MouldSummary";
import PMStatus from "./pages/PMStatus";
import HCStatus from "./pages/HCStatus";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
         <Route path="/mould-history" element={<MouldHistory />} />
         <Route path="/mould-summary" element={<MouldSummary />} />
          <Route path="/PM-Status" element={<PMStatus />} />
          <Route path="/HC-Status" element={<HCStatus />} />
      </Routes>
    </Router>
  );
}

export default App;
