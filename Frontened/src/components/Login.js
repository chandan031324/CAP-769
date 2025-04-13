import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem("userRole");
    if (role) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    // Fake login logic
    if (email === "admin@gmail.com" && password === "admin123") {
      localStorage.setItem("userRole", "admin");
      setIsLoggedIn(true);
      navigate("/Dashboard");
    } else if (email === "user@gmail.com" && password === "user123") {
      localStorage.setItem("userRole", "user");
      setIsLoggedIn(true);
      navigate("/User Dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    setIsLoggedIn(false);
    setFormData({ email: "", password: "" });
    navigate("/Login");
  };

  return (
    <div className="login-container">
      {!isLoggedIn ? (
        <form onSubmit={handleSubmit} className="login-form">
          <input
            name="email"
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <input
            name="password"
            type="password"
            onChange={handleChange}
            placeholder="Password"
            required
          />
          <button type="submit">Login</button>
          <p>
            Create New account?{" "}
            <span className="login-link" onClick={() => navigate("/Register")}>
              go to register
            </span>
          </p>
        </form>
      ) : (
        <div className="logout-box">
          <h3>You are already logged in.</h3>
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;
