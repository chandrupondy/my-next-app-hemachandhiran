"use client";

import { useDispatch, useSelector } from "react-redux";
import { fetchUsersRequest } from "@/features/users/userSlice";
import type { RootState } from "@/store/store";

export default function Page() {
  const dispatch = useDispatch();

  const { users, loading, error } = useSelector(
    (state: RootState) => state.users
  );

  const fetchUsers = () => {
    console.log("Clicked ✅");
    dispatch(fetchUsersRequest());
  };

  return (
    <div>
      <button onClick={fetchUsers}>
        Load Users
      </button>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {users.map((user: any) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}