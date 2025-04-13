import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome,  FaBars, FaTimes, FaBell,FaMapMarkedAlt ,FaPhone } from "react-icons/fa";
import "../styles/Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <h2 className="sidebar-title">Dashboard</h2>
        <ul className="sidebar-links">
          <li><Link to="/"><FaHome /> Home</Link></li>
          <li><Link to="/Notifications"><FaBell />Notifications</Link></li>
          <li><Link to="/MapView"><FaMapMarkedAlt/>MapView</Link></li>
          <li><Link to="/Contact"><FaPhone/>Contact</Link></li>

          
          
          
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
