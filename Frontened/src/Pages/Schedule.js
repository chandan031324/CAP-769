import React, { useState, useEffect } from "react";
import "../styles/Schedule.css";
import ScheduleList from "../components/ScheduleList";
import AddSchedule from "../components/AddSchedule";

const Schedule = () => {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    // Sample Data (Replace with API call)
    const fetchSchedules = async () => {
      const data = [
        { id: 1, busNumber: "DL 01 AB 1234", route: "Route 1", departureTime: "08:00 AM", arrivalTime: "10:00 AM" },
        { id: 2, busNumber: "DL 02 XY 5678", route: "Route 2", departureTime: "09:30 AM", arrivalTime: "11:30 AM" },
      ];
      setSchedules(data);
    };

    fetchSchedules();
  }, []);

  const handleAddSchedule = (newSchedule) => {
    setSchedules([...schedules, { ...newSchedule, id: schedules.length + 1 }]);
  };

  const handleDeleteSchedule = (scheduleId) => {
    const updatedSchedules = schedules.filter(schedule => schedule.id !== scheduleId);
    setSchedules(updatedSchedules);
  };

  return (
    <div className="schedule-container">
      <h1>Schedule Management</h1>
      <AddSchedule onAddSchedule={handleAddSchedule} />
      <ScheduleList schedules={schedules} onDeleteSchedule={handleDeleteSchedule} />
    </div>
  );
};

export default Schedule;
