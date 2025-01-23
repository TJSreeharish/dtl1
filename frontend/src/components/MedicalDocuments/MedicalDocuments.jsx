import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './MedicalDocuments.css';
import backgroundVideo from "./dback.mp4";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const backend_url = import.meta.env.VITE_JS_BACKEND_URL;

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${backend_url}/api/users`);
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      <Link to="/home" className="dashboard-link">
        <button className="dashboard-button">Dashboard</button>
      </Link>
      <h1 className="heading">User Management</h1>

      <input
        type="text"
        placeholder="Search by name..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="search-input"
      />

      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email-ID</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.email}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        id="background-video"
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

    </div>
  );
};

export default UserList;
