import React, { useState } from "react";
import "./LoginScreen.css";
import ugLogo from "../assets/ug-logo.png";   // <-- place UG logo here
import lockIcon from "../assets/lock-icon.png"; // <-- place lock icon here

const LoginScreen = () => {
  const [userId, setUserId] = useState("");
  const [pin, setPin] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login attempted with:", { userId, pin });
  };

  return (
    <div className="login-container">
      {/* Top UG Logo */}
      <div className="logo-container">
        <img src={ugLogo} alt="UG Logo" className="ug-logo" />
      </div>

      {/* Card */}
      <div className="login-card">
        <h1 className="login-title">Login Required</h1>

        {/* Banner */}
        <div className="login-banner">
          <span>UNIVERSITY</span>
          <img src={ugLogo} alt="UG Logo small" className="banner-logo" />
          <span>OF GHANA</span>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="login-form">
          <label htmlFor="userId">user id</label>
          <input
            id="userId"
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />

          <label htmlFor="pin">Pin</label>
          <input
            id="pin"
            type="password"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            required
          />

          <button type="submit" className="login-button">
            <img src={lockIcon} alt="Lock" className="button-icon" />
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
