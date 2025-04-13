import React, { useState, useEffect } from "react";
import "../styles/Notifications.css";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Simulated API call to fetch notifications
    const fetchNotifications = async () => {
      const data = [
        { id: 1, message: "New bus added on Route 5", type: "info", timestamp: "10:30 AM" },
        { id: 2, message: "Schedule updated for Bus DL 01 AB 1234", type: "warning", timestamp: "11:15 AM" },
        { id: 3, message: "Maintenance scheduled for Bus DL 02 XY 5678", type: "alert", timestamp: "12:00 PM" },
      ];
      setNotifications(data);
    };

    fetchNotifications();
  }, []);

  const handleClearNotifications = () => {
    setNotifications([]);
  };

  return (
    <div className="notifications-container">
      <h2>Notifications</h2>
      {notifications.length > 0 ? (
        <ul className="notifications-list">
          {notifications.map((notification) => (
            <li key={notification.id} className={`notification-item ${notification.type}`}>
              <span className="notification-message">{notification.message}</span>
              <span className="notification-time">{notification.timestamp}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>No new notifications</p>
      )}
      {notifications.length > 0 && (
        <button className="clear-btn" onClick={handleClearNotifications}>
          Clear Notifications
        </button>
      )}
    </div>
  );
};

export default Notifications;
