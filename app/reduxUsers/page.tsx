"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchUsersRequest,
  addUserRequest,
  deleteUserRequest,
  updateUserRequest,
} from "@/features/users/userSlice";

export default function UsersPage() {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state: any) => state.users);

  const [name, setName] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editValue, setEditValue] = useState("");

  useEffect(() => {
    dispatch(fetchUsersRequest());
  }, [dispatch]);

  const handleAddUser = () => {
    if (!name.trim()) return;
    dispatch(addUserRequest({ id: Date.now(), name }));
    setName("");
  };

  const handleUpdate = (id: number) => {
    if (!editValue.trim()) return;
    dispatch(updateUserRequest({ id, name: editValue }));
    setEditingId(null);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">

      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        👥 Users Management
      </h2>

      {/* Add User */}
      <div className="flex gap-2 mb-6">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter user name..."
          className="flex-1 border px-4 py-2 rounded-lg"
        />
        <button
          onClick={handleAddUser}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Add
        </button>
      </div>

      {loading && <p>Loading...</p>}

      <div className="space-y-3">
        {users.map((u: any) => (
          <div
            key={u.id}
            className="flex justify-between items-center p-3 border rounded-lg"
          >
            {/* EDIT MODE */}
            {editingId === u.id ? (
              <>
                <input
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  className="border px-2 py-1 rounded w-full mr-2"
                />

                <button
                  onClick={() => handleUpdate(u.id)}
                  className="bg-green-500 text-white px-3 py-1 rounded mr-2"
                >
                  Save
                </button>

                <button
                  onClick={() => setEditingId(null)}
                  className="bg-gray-400 text-white px-3 py-1 rounded"
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                {/* VIEW MODE */}
                <span>{u.name}</span>

                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setEditingId(u.id);
                      setEditValue(u.name);
                    }}
                    className="bg-yellow-500 text-white px-3 py-1 rounded text-sm"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => dispatch(deleteUserRequest(u.id))}
                    className="bg-red-500 text-white px-3 py-1 rounded text-sm"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}