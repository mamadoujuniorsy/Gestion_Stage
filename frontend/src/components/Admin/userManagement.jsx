import React, { useState } from 'react';
import AdminSidebar from './AdminSidebar';

const initialUsers = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'stagiaire' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'drh' },
];

const roles = ['stagiaire', 'drh', 'admin'];

const UserManagement = () => {
  const [users, setUsers] = useState(initialUsers);
  const [editingUser, setEditingUser] = useState(null);
  const [newUser, setNewUser] = useState({ name: '', email: '', role: 'stagiaire' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingUser) {
      setUsers(users.map(user => (user.id === editingUser.id ? { ...newUser, id: editingUser.id } : user)));
    } else {
      setUsers([...users, { ...newUser, id: Date.now() }]);
    }
    setNewUser({ name: '', email: '', role: 'stagiaire' });
    setEditingUser(null);
  };

  const handleEdit = (user) => {
    setNewUser(user);
    setEditingUser(user);
  };

  const handleDelete = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  return (
    <div className="flex h-screen">
      <AdminSidebar className="w-1/4 h-full" />
      <div className="flex-1 p-4 overflow-auto">
        <div className="mb-4 bg-white p-6 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex space-x-4">
              <input
                type="text"
                name="name"
                value={newUser.name}
                onChange={handleInputChange}
                placeholder="Name"
                required
                className="p-2 border rounded w-full"
              />
              <input
                type="email"
                name="email"
                value={newUser.email}
                onChange={handleInputChange}
                placeholder="Adresse email"
                required
                className="p-2 border rounded w-full"
              />
            </div>
            <div className="flex space-x-4">
              <select
                name="role"
                value={newUser.role}
                onChange={handleInputChange}
                className="p-2 border rounded w-full"
              >
                {roles.map(role => (
                  <option key={role} value={role}>{role}</option>
                ))}
              </select>
              <button
                type="submit"
                className="p-2 bg-blue-500 text-white rounded w-full"
              >
                {editingUser ? 'Modifier utilisateur' : 'Ajouter utilisateur'}
              </button>
            </div>
          </form>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-bold mb-4">User List</h2>
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-50">Nom</th>
                <th className="px-6 py-3 bg-gray-50">Adresse email</th>
                <th className="px-6 py-3 bg-gray-50">Role</th>
                <th className="px-6 py-3 bg-gray-50">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map(user => (
                <tr key={user.id}>
                  <td className="px-6 py-4">{user.name}</td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4 capitalize">{user.role}</td>
                  <td className="px-6 py-4 space-x-4">
                    <button
                      onClick={() => handleEdit(user)}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      Modifier
                    </button>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
