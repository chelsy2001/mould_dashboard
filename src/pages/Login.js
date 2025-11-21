import React from "react";
import "../styles/login.css";
import Logo from "../assets/Dalisoft Logo.jpg";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/home"); // Redirect to home page
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img src={Logo} alt="Illustration" className="login-img" />
      </div>

      <div className="login-right">
        <h2>Welcome to Dashboard</h2>

        <div className="login-form">
          <label>Username:</label>
          <select>
            <option>Select Username</option>
            <option>Ayush</option>
            <option>Kashish</option>
            <option>Rushikesh Buddala</option>
            <option>Vishal</option>
          </select>

          <label>Password:</label>
          <input type="password" placeholder="Enter password" />

          <button className="login-btn" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
