import React from "react";

const RouteList = ({ routes, onDeleteRoute }) => {
  return (
    <div className="route-list">
      <h2>Existing Routes</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Start</th>
            <th>End</th>
            <th>Stops</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {routes.length > 0 ? (
            routes.map((route) => (
              <tr key={route.id}>
                <td>{route.id}</td>
                <td>{route.name}</td>
                <td>{route.startLocation}</td>
                <td>{route.endLocation}</td>
                <td>{route.stops.join(", ")}</td>
                <td>
                  <button onClick={() => onDeleteRoute(route.id)} className="delete-btn">Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No routes available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default RouteList;
