import React from "react";
import "./HomeScreen.css";
import StatusBar from "../components/StatusBar";
import BottomNav from "../components/BottomNav";
import avatar from "../assets/avatar.png"; // placeholder image for user

const HomeScreen = () => {
  return (
    <div className="home-container">
      {/* Status bar */}
      <StatusBar />

      {/* Page content */}
      <h1 className="home-title">Home</h1>

      <div className="profile-card">
        <img src={avatar} alt="User Avatar" className="profile-avatar" />
        <table className="profile-table">
          <tbody>
            <tr><td colSpan="2" className="profile-name">JAMES DOWNTOWN</td></tr>
            <tr><td>Student Nbr</td><td>123456</td></tr>
            <tr><td>Programme</td><td>Computer Science</td></tr>
            <tr><td>Birthdate</td><td>01/01/2000</td></tr>
            <tr><td>Gender</td><td>Male</td></tr>
            <tr><td>Citizenship</td><td>Ghanaian</td></tr>
            <tr><td>Home Lang</td><td>Twi</td></tr>
            <tr><td>Email Address</td><td>james@ug.edu.gh</td></tr>
          </tbody>
        </table>
      </div>

      <button className="replacement-button">Request Replacement</button>

      {/* Bottom nav */}
      <BottomNav />
    </div>
  );
};

export default HomeScreen;
