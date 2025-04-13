import React from "react";
import { Link } from "react-router-dom";
import "../styles/Dashboard.css";
import adminPic from "../Assets/admin.png"; // Ensure you have an image in assets folder

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <img src={adminPic} alt="Admin" className="admin-pic" />
      <h1 className="dashboard-title">Admin Dashboard</h1>
      <div className="dashboard-grid">
        <Link to="/buses" className="dashboard-card">🚌 Manage Buses</Link>
        <Link to="/routes" className="dashboard-card">📍 Manage Routes</Link>
        <Link to="/schedule" className="dashboard-card">📅 Manage Schedules</Link>
        <Link to="/notifications" className="dashboard-card">🔔 Notifications</Link>
        <Link to="/profile" className="dashboard-card">👤 Profile</Link>
        <Link to="/Duties" className="dashboard-card">Manage Duties</Link>

      </div>
    </div>
  );
};

export default Dashboard;
