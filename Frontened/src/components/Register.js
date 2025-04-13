import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Register.css";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "user", // default role
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registered:", user);
    alert("Registered successfully!");
    navigate("/login");
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Name</label>
          <input type="text" name="name" value={user.name} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>Email</label>
          <input type="email" name="email" value={user.email} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input type="password" name="password" value={user.password} onChange={handleChange} required />
        </div>
        <div className="input-group">
  <label htmlFor="role" className="role-label">Select Role</label>
  <select
    id="role"
    name="role"
    value={user.role}
    onChange={handleChange}
    className="role-select"
    required
  >
    <option value="user">User</option>
    <option value="admin">Admin</option>
  </select>
</div>
        <button type="submit" className="register-btn">Register</button>
      </form>
      <p>
        Already have an account? <span className="login-link" onClick={() => navigate("/login")}>Login here</span>
      </p>
    </div>
  );
};

export default Register;
