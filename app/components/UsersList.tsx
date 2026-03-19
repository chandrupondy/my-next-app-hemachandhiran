"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "@/features/users/userSlice";
import type { AppDispatch, RootState } from "@/store/store";


export default function Users() {
  const dispatch = useDispatch<AppDispatch>();

  const { users, loading, error } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>User List</h2>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}