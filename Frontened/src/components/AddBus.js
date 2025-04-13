import React, { useState } from "react";
import "../styles/AddBus.css";

const AddBus = ({ onAdd }) => {
  const [busNumber, setBusNumber] = useState("");
  const [capacity, setCapacity] = useState("");
  const [driver, setDriver] = useState("");
  const [route, setRoute] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!busNumber || !capacity || !driver || !route) {
      alert("Please fill in all fields!");
      return;
    }

    // Create new bus object
    const newBus = {
      id: Math.floor(Math.random() * 1000), // Temporary ID
      busNumber,
      capacity: parseInt(capacity),
      driver,
      route,
    };

    // Pass the new bus data to parent component
    onAdd(newBus);

    // Clear input fields
    setBusNumber("");
    setCapacity("");
    setDriver("");
    setRoute("");
  };

  return (
    <div className="add-bus-container">
      <h2>Add New Bus</h2>
      <form onSubmit={handleSubmit} className="add-bus-form">
        <div>
          <label>Bus Number:</label>
          <input
            type="text"
            value={busNumber}
            onChange={(e) => setBusNumber(e.target.value)}
            placeholder="Enter bus number"
          />
        </div>
        <div>
          <label>Capacity:</label>
          <input
            type="number"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
            placeholder="Enter bus capacity"
          />
        </div>
        <div>
          <label>Driver Name:</label>
          <input
            type="text"
            value={driver}
            onChange={(e) => setDriver(e.target.value)}
            placeholder="Enter driver name"
          />
        </div>
        <div>
          <label>Route:</label>
          <input
            type="text"
            value={route}
            onChange={(e) => setRoute(e.target.value)}
            placeholder="Enter route"
          />
        </div>
        <button type="submit">Add Bus</button>
      </form>
    </div>
  );
};

export default AddBus;
