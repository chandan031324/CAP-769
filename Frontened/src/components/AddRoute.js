import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/AddRoute.css";

const AddRoute = ({ onAddRoute }) => {
  const [routeName, setRouteName] = useState("");
  const [startLocation, setStartLocation] = useState("");
  const [endLocation, setEndLocation] = useState("");
  const [stops, setStops] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form inputs
    if (!routeName || !startLocation || !endLocation) {
      setError("All fields except stops are required.");
      return;
    }

    // Convert stops into an array
    const stopsArray = stops ? stops.split(",").map((stop) => stop.trim()) : [];

    // Create new route object
    const newRoute = {
      id: Date.now(), // Temporary unique ID
      name: routeName,
      startLocation,
      endLocation,
      stops: stopsArray,
    };

    // Call the parent function to add the route
    onAddRoute(newRoute);

    // Reset the form
    setRouteName("");
    setStartLocation("");
    setEndLocation("");
    setStops("");
    setError("");
  };

  return (
    <div className="add-route-container">
      <h2>Add New Route</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit} className="add-route-form">
        <div>
          <label>Route Name:</label>
          <input 
            type="text" 
            value={routeName} 
            onChange={(e) => setRouteName(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Start Location:</label>
          <input 
            type="text" 
            value={startLocation} 
            onChange={(e) => setStartLocation(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>End Location:</label>
          <input 
            type="text" 
            value={endLocation} 
            onChange={(e) => setEndLocation(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Stops (comma-separated):</label>
          <input 
            type="text" 
            value={stops} 
            onChange={(e) => setStops(e.target.value)} 
          />
        </div>
        <button type="submit">Add Route</button>
      </form>
    </div>
  );
};

//  Validate the `onAddRoute` function prop
AddRoute.propTypes = {
  onAddRoute: PropTypes.func.isRequired,
};

export default AddRoute;
