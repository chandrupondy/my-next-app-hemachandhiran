"use client";

import { useDispatch, useSelector } from "react-redux";
import { fetchUsersRequest } from "@/features/users/userSlice";
import type { RootState, AppDispatch } from "@/store/store";

export default function ReduxSagaPage() {
  const dispatch = useDispatch<AppDispatch>();

  const { users, loading, error } = useSelector(
    (state: RootState) => state.users
  );

  const handleFetchUsers = () => {
    console.log("Clicked ✅");
    dispatch(fetchUsersRequest());
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Redux Saga Users</h1>

      <button
        onClick={handleFetchUsers}
        className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg">
        Load Users
      </button>

      {loading && <p className="mt-4">Loading...</p>}

      {error && <p className="mt-4 text-red-500">Error: {error}</p>}

      <div className="mt-4 space-y-2">
        {users.map((user: any) => (
          <div
            key={user.id}
            className="p-3 border rounded-lg shadow-sm">
            <p className="font-semibold">{user.name}</p>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}