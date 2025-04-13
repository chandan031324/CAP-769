import React, { useState } from "react";

const AddSchedule = ({ onAddSchedule }) => {
  const [schedule, setSchedule] = useState({
    busNumber: "",
    route: "",
    departureTime: "",
    arrivalTime: "",
  });

  const handleChange = (e) => {
    setSchedule({ ...schedule, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!schedule.busNumber || !schedule.route || !schedule.departureTime || !schedule.arrivalTime) {
      alert("Please fill all fields");
      return;
    }
    onAddSchedule(schedule);
    setSchedule({ busNumber: "", route: "", departureTime: "", arrivalTime: "" });
  };

  return (
    <div className="add-schedule">
      <h2>Add New Schedule</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="busNumber" placeholder="Bus Number" value={schedule.busNumber} onChange={handleChange} required />
        <input type="text" name="route" placeholder="Route" value={schedule.route} onChange={handleChange} required />
        <input type="time" name="departureTime" value={schedule.departureTime} onChange={handleChange} required />
        <input type="time" name="arrivalTime" value={schedule.arrivalTime} onChange={handleChange} required />
        <button type="submit">Add Schedule</button>
      </form>
    </div>
  );
};

export default AddSchedule;
