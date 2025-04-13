import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Schedule from "./Pages/Schedule";
import RoutesPage from "./Pages/Routes";
import Buses from "./Pages/Buses";
import Profile from "./Pages/Profile";
import Dashboard from "./Pages/Dashboard";
import Notifications from "./Pages/Notifications";
import MapView from "./Pages/MapView";
import Contact from"./components/Contact";
import Duties from "./Pages/Duties";
import UserDashboard from "./Pages/User Dashboard";
import UserProfile from "./Pages/User Profile";




const App = () => {
  
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/routes" element={<RoutesPage />} />
            <Route path="/buses" element={<Buses />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Notifications" element={<Notifications />} />
            <Route path="/MapView" element={<MapView />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Duties" element={<Duties />} />
            <Route path="/User Dashboard" element={<UserDashboard />} />
            <Route path="/User profile" element={<UserProfile />} />
            
            
            
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
