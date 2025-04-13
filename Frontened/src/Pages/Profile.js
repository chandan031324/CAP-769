import React, { useState } from "react";
import "../styles/Profile.css";

const Profile = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Rajesh Kumar", email: "rajesh@example.com", role: "Admin" },
    { id: 2, name: "Amit Sharma", email: "amit@example.com", role: "Manager" },
  ]);

  const [newUser, setNewUser] = useState({ name: "", email: "", role: "" });

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleAddUser = () => {
    if (newUser.name && newUser.email && newUser.role) {
      setUsers([...users, { id: users.length + 1, ...newUser }]);
      setNewUser({ name: "", email: "", role: "" });
    } else {
      alert("Please fill all fields");
    }
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="profile-container">
      <h2>🚍 User Profile Management</h2>

      {/* Add User Form */}
      <div className="user-form">
        <input type="text" name="name" value={newUser.name} onChange={handleChange} placeholder="Enter Name" />
        <input type="email" name="email" value={newUser.email} onChange={handleChange} placeholder="Enter Email" />
        <input type="text" name="role" value={newUser.role} onChange={handleChange} placeholder="Enter Role" />
        <button onClick={handleAddUser}>➕ Add User</button>
      </div>

      {/* User List Table */}
      <h3>📋 Users List</h3>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <button className="delete-btn" onClick={() => handleDeleteUser(user.id)}>🗑 Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No users available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Profile;
