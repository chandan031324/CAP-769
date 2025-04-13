import React, { useState } from "react";
import "../styles/User DashBoard.css";
import { useNavigate } from "react-router-dom";

import userImage from "../Assets/user.png";

const UserDashboard = () => {
  const navigate = useNavigate();

  // State for bus schedule form
  const [showForm, setShowForm] = useState(false);

  
  const handleBusScheduleClick = () => {
    setShowForm(true);
  };

  const handleClose = () => {
    setShowForm(false);
   
  };

  

  return (
    <div className="user-dashboard-container">
      <h2 className="user-dashboard-header">Welcome to User Dashboard</h2>

      <img src={userImage} alt="user Icon" className="user-image" />

      <div className="user-dashboard-content">

        {/* Bus Schedule */}
        <div className="user-card" onClick={handleBusScheduleClick}>
          <h3>My Bus Schedule</h3>
          <p>View your upcoming bus schedules and assigned stops.</p>
        </div>

        {/* Route Map */}
        <div className="user-card" onClick={() => navigate("/mapview")}>
          <h3>Route Map</h3>
          <p>Check live route maps and planned routes for the day.</p>
        </div>

        {/* Announcements */}
        <div className="user-card" onClick={() => navigate("/Notifications")}>
          <h3>Announcements</h3>
          <p>Important updates or delays from the transport department.</p>
        </div>

        {/* My Profile */}
        <div className="user-card" onClick={() => navigate("/User Profile")} style={{ cursor: "pointer" }}>
          <h3>My Profile</h3>
          <p>View and edit your personal details</p>
        </div>

      </div>

      {/* Bus Schedule Form Popup */}
      {showForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close-button" onClick={handleClose}>&times;</span>
            <h3>Bus Schedule Form</h3>
            <form className="bus-form">
              <input type="text" placeholder="From" />
              <input type="text" placeholder="To" />
              <input type="time" />
              <button type="submit">Show Buses</button>
            </form>
          </div>
        </div>
      )} 

    </div>
  );
};

export default UserDashboard;
