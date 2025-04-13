import React, { useEffect, useState } from "react";
import "../styles/Duties.css";

const Duties = () => {
  const [duties, setDuties] = useState([]);
  const [newDuty, setNewDuty] = useState({
    busNo: "",
    driver: "",
    route: "",
  });

  useEffect(() => {
    const dummyDuties = [
      { id: 1, busNo: "DL-01-1234", driver: "Ram", route: "Route 21" },
      { id: 2, busNo: "DL-01-5678", driver: "Shyam", route: "Route 10" },
    ];
    setDuties(dummyDuties);
  }, []);

  const handleChange = (e) => {
    setNewDuty({ ...newDuty, [e.target.name]: e.target.value });
  };

  const handleAddDuty = (e) => {
    e.preventDefault();
    if (newDuty.busNo && newDuty.driver && newDuty.route) {
      const newId = duties.length + 1;
      setDuties([...duties, { id: newId, ...newDuty }]);
      setNewDuty({ busNo: "", driver: "", route: "" }); // Clear form
    } else {
      alert("Please fill all fields.");
    }
  };

  return (
    <div className="duties-container">
      <h2>Duties List</h2>

      <form className="duty-form" onSubmit={handleAddDuty}>
        <input
          type="text"
          name="busNo"
          placeholder="Bus Number"
          value={newDuty.busNo}
          onChange={handleChange}
        />
        <input
          type="text"
          name="driver"
          placeholder="Driver Name"
          value={newDuty.driver}
          onChange={handleChange}
        />
        <input
          type="text"
          name="route"
          placeholder="Route"
          value={newDuty.route}
          onChange={handleChange}
        />
        <button type="submit">Assign Duty</button>
      </form>

      <ul className="duties-list">
        {duties.map((duty) => (
          <li key={duty.id}>
            <strong>Bus:</strong> {duty.busNo} | <strong>Driver:</strong> {duty.driver} | <strong>Route:</strong> {duty.route}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Duties;
