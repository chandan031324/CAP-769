import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container" >
      <div className="hero-section">
        <h1>Welcome to Automated Bus Scheduling System</h1>
        <p>Optimize bus scheduling, route planning, and resource management efficiently.</p>
        
        <div className="btn-container">
          <Link to="/register" className="btn register-btn">Get Started</Link>
          <Link to="/login" className="btn login-btn">Login</Link>
        </div>
      </div>

      <div className="features-section">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Linked Duty Scheduling</h3>
            <p>Assign a crew to a bus and manage schedules seamlessly.</p>
          </div>
          <div className="feature-card">
            <h3>Unlinked Duty Scheduling</h3>
            <p>Allow crew handovers and efficient shift planning.</p>
          </div>
          <div className="feature-card">
            <h3>Route Management</h3>
            <p>Map and optimize bus routes with real-time analytics.</p>
          </div>
          <div className="feature-card">
            <h3>Live Tracking</h3>
            <p>Monitor bus locations and improve service efficiency.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
