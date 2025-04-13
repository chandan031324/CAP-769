import React, { useState, useEffect } from "react";
import "../styles/Buses.css";
import BusList from "../components/BusList";
import AddBus from "../components/AddBus";

const Buses = () => {
  const [buses, setBuses] = useState([]);

  useEffect(() => {
    // Simulated bus data
    const fetchBuses = async () => {
      const data = [
        { id: 1, busNumber: "DL 01 AB 1234", capacity: 40, driver: "Rajesh Kumar", route: "Route 1" },
        { id: 2, busNumber: "DL 02 XY 5678", capacity: 35, driver: "Amit Sharma", route: "Route 2" },
        { id: 3, busNumber: "DL 03 CD 9101", capacity: 50, driver: "Suresh Yadav", route: "Route 3" },
      ];
      setBuses(data);
    };

    fetchBuses();
  }, []);

  // Function to add a new bus
  const handleAddBus = (newBus) => {
    setBuses([...buses, { ...newBus, id: buses.length + 1 }]);
  };

  // Function to delete a bus
  const handleDeleteBus = (busId) => {
    const updatedBuses = buses.filter(bus => bus.id !== busId);
    setBuses(updatedBuses);
  };

  return (
    <div className="buses-container">
      <h1>Bus Management</h1>
      <AddBus onAddBus={handleAddBus} />
      <BusList buses={buses} onDeleteBus={handleDeleteBus} />
    </div>
  );
};

export default Buses;
