import React from "react";
import "./StatusBar.css";
import batteryIcon from "../assets/battery.png";   // download your battery icon
import signalIcon from "../assets/signal.png";     // download your signal icon

const StatusBar = () => {
  return (
    <div className="status-bar">
      <span className="status-time">12:45</span>
      <div className="status-icons">
        <img src={signalIcon} alt="Signal" className="status-icon" />
        <img src={batteryIcon} alt="Battery" className="status-icon" />
      </div>
    </div>
  );
};

export default StatusBar;
