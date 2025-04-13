import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>🚍 Bus Scheduling Management</h3>
          <p>Optimizing routes and schedules for efficient bus transportation.</p>
        </div>

        <div className="footer-section">
          <h3>🌍 Quick Links</h3>
          <ul>
            <li><a href="/MapView">Mapview</a></li>
            <li><a href="/Notifications">Notifications</a></li>
            <li><a href="/Contact">Contact</a></li>
            <li><a href="/Login">Login</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>📞 Contact Us</h3>
          <p>Email: support@busscheduler.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Address: 123, Transport Lane, India</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Bus Scheduling Management System | All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
