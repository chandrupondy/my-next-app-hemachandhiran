"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  
  const logout = () => {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("userEmail");
  window.location.href = "/login";
};

  useEffect(() => {
    const status = localStorage.getItem("isLoggedIn");
    const userEmail = localStorage.getItem("userEmail");

    if (status === "true") {
      setIsLoggedIn(true);
      setEmail(userEmail || "");
    }
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <>
        <h2>Welcome {email}</h2>
        <button onClick={logout}>Logout</button>
        </>
      ) : (
        <h2>Please login first</h2>
      )}
    </div>
  );
  
}