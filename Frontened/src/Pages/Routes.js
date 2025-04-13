import React, { useState } from "react";
import RouteList from "../components/RouteList";
import AddRoute from "../components/AddRoute";
import "../styles/Routes.css";

const Routes = () => {
  const [routes, setRoutes] = useState([
    { id: 1, name: "Route 1", startLocation: "Delhi", endLocation: "Noida", stops: ["Stop A", "Stop B"] },
    { id: 2, name: "Route 2", startLocation: "Gurgaon", endLocation: "Faridabad", stops: ["Stop X", "Stop Y"] },
  ]);

  // Function to add a new route
  const handleAddRoute = (newRoute) => {
    setRoutes([...routes, { ...newRoute, id: routes.length + 1 }]);
  };

  // Function to delete a route
  const handleDeleteRoute = (routeId) => {
    const updatedRoutes = routes.filter(route => route.id !== routeId);
    setRoutes(updatedRoutes);
  };

  return (
    <div className="routes-container">
      <h1>Bus Routes Management</h1>
      <AddRoute onAddRoute={handleAddRoute} />
      <RouteList routes={routes} onDeleteRoute={handleDeleteRoute} />
    </div>
  );
};

export default Routes;
