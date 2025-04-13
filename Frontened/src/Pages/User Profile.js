// src/Pages/UserProfile.js
import React, { useState } from "react";
import "../styles/User Profile.css";

const UserProfile = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "1234567890"
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile updated!");
    // Add backend update logic here
  };

  return (
    <div className="profile-container">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit} className="profile-form">
        <input name="name" value={profile.name} onChange={handleChange} />
        <input name="email" value={profile.email} onChange={handleChange} />
        <input name="phone" value={profile.phone} onChange={handleChange} />
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default UserProfile;
