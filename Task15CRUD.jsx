import React, { useState, useEffect } from 'react';
import './Task15CRUD.css';

export default function Task15CRUD() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [editingId, setEditingId] = useState(null);

  const API_URL = 'https://jsonplaceholder.typicode.com/users';

  // Read: Fetch the initial user list from the API on mount
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  // Sync inputs with the form state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle both Create (POST) and Update (PUT)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    if (editingId) {
      // Update operation
      fetch(`${API_URL}/${editingId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then(() => {
          setUsers(users.map((user) => (user.id === editingId ? { ...user, ...formData } : user)));
          setEditingId(null);
          setFormData({ name: '', email: '' });
        })
        .catch((err) => console.error("Error updating user:", err));
    } else {
      // Create operation
      fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((newUser) => {
          // Generate a safe dynamic ID for local rendering safety
          const nextId = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;
          setUsers([...users, { ...newUser, id: nextId }]);
          setFormData({ name: '', email: '' });
        })
        .catch((err) => console.error("Error creating user:", err));
    }
  };

  // Switch form to editing mode and load user data
  const handleEditClick = (user) => {
    setEditingId(user.id);
    setFormData({ name: user.name, email: user.email });
  };

  // Delete operation
  const handleDelete = (id) => {
    fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setUsers(users.filter((user) => user.id !== id));
      })
      .catch((err) => console.error("Error deleting user:", err));
  };

  return (
    <div className="crud-container">
      <h2>User Directory (CRUD Integration)</h2>
      <p className="subtitle">Task 15 — JSONPlaceholder API Interaction</p>

      {/* Dynamic Input Form */}
      <form className="user-form" onSubmit={handleSubmit}>
        <h3>{editingId ? "Modify User Information" : "Add New User Profiles"}</h3>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <button type="submit" className={`submit-btn ${editingId ? 'update' : 'add'}`}>
            {editingId ? 'Save Changes' : 'Add User'}
          </button>
        </div>
      </form>

      {/* Main Records Presentation Grid */}
      <div className="table-responsive">
        <table className="crud-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td><strong>{user.name}</strong></td>
                <td>{user.email}</td>
                <td>
                  <div className="actions-wrapper">
                    <button className="action-btn edit-btn" onClick={() => handleEditClick(user)}>
                      Edit
                    </button>
                    <button className="action-btn delete-btn" onClick={() => handleDelete(user.id)}>
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}