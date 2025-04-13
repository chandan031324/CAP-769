import React from "react";

const ScheduleList = ({ schedules, onDeleteSchedule }) => {
  return (
    <div className="schedule-list">
      <h2>Bus Schedules</h2>
      <table className="schedule-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Bus Number</th>
            <th>Route</th>
            <th>Departure Time</th>
            <th>Arrival Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {schedules.length > 0 ? (
            schedules.map((schedule) => (
              <tr key={schedule.id}>
                <td>{schedule.id}</td>
                <td>{schedule.busNumber}</td>
                <td>{schedule.route}</td>
                <td>{schedule.departureTime}</td>
                <td>{schedule.arrivalTime}</td>
                <td>
                  <button onClick={() => onDeleteSchedule(schedule.id)} className="delete-btn">
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No schedules available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ScheduleList;
