import React from "react";

const BusList = ({ buses, onDeleteBus }) => {
  return (
    <div className="bus-list">
      <h2>Available Buses</h2>
      <table className="buses-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Bus Number</th>
            <th>Capacity</th>
            <th>Driver</th>
            <th>Route</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {buses.length > 0 ? (
            buses.map((bus) => (
              <tr key={bus.id}>
                <td>{bus.id}</td>
                <td>{bus.busNumber}</td>
                <td>{bus.capacity}</td>
                <td>{bus.driver}</td>
                <td>{bus.route}</td>
                <td>
                  <button onClick={() => onDeleteBus(bus.id)} className="delete-btn">Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No buses available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BusList;
