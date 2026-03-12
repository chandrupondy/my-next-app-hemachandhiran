"use client";

import { useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

const initialData: User[] = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
];

export default function CrudPage() {
  const [users, setUsers] = useState<User[]>(initialData);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editId, setEditId] = useState<number | null>(null);

  // Add or Update
  const handleSubmit = () => {
    if (!name || !email) return;

    if (editId !== null) {
      // Update
      setUsers(users.map(user =>
        user.id === editId ? { ...user, name, email } : user
      ));
      setEditId(null);
    } else {
      // Add
      const newUser = {
        id: Date.now(),
        name,
        email,
      };
      setUsers([...users, newUser]);
    }

    setName("");
    setEmail("");
  };

  // Edit
  const handleEdit = (user: User) => {
    setName(user.name);
    setEmail(user.email);
    setEditId(user.id);
  };

  // Delete
  const handleDelete = (id: number) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">User Management</h1>
          <p className="text-gray-600 dark:text-gray-400">Create, read, update, and delete users effortlessly</p>
        </div>

        {/* Form Card */}
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 mb-8 border border-gray-200 dark:border-slate-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            {editId !== null ? "✏️ Update User" : "➕ Add New User"}
          </h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
              <input
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>

            <div className="flex gap-3 pt-4">
              <button 
                onClick={handleSubmit}
                className={`flex-1 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200 ${
                  editId !== null
                    ? "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                    : "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                } shadow-md hover:shadow-lg`}
              >
                {editId !== null ? "Update User" : "Add User"}
              </button>
              
              {editId !== null && (
                <button 
                  onClick={() => {
                    setEditId(null);
                    setName("");
                    setEmail("");
                  }}
                  className="px-6 py-3 rounded-lg font-semibold text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-slate-700 hover:bg-gray-300 dark:hover:bg-slate-600 transition-all duration-200"
                >
                  Cancel
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Users List */}
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-slate-700">
          <div className="px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-slate-700 dark:to-slate-800">
            <h2 className="text-xl font-bold text-white">Users List ({users.length})</h2>
          </div>

          {users.length === 0 ? (
            <div className="px-6 py-12 text-center">
              <span className="text-4xl mb-4 block">📭</span>
              <p className="text-gray-600 dark:text-gray-400 text-lg">No users found. Add one to get started!</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100 dark:bg-slate-700 border-b border-gray-200 dark:border-slate-600">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Name</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Email</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
                  {users.map(user => (
                    <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors">
                      <td className="px-6 py-4 text-gray-900 dark:text-gray-200 font-medium">{user.name}</td>
                      <td className="px-6 py-4 text-gray-600 dark:text-gray-400">{user.email}</td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button 
                            onClick={() => handleEdit(user)}
                            className="px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors text-sm"
                          >
                            Edit
                          </button>
                          <button 
                            onClick={() => handleDelete(user.id)}
                            className="px-3 py-2 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition-colors text-sm"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}