"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { apiFetch } from "@/lib/api";


export default function Dashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState<any>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    // Get email from localStorage
    const userEmail = localStorage.getItem("userEmail");
    if (userEmail) {
      setEmail(userEmail);
    }

    const loadProfile = async () => {
      try {
        const data = await apiFetch("/api/profile");
        setProfile(data);
        setLoading(false);
      } catch (error) {
        console.log("Failed to load profile");
        if (error?.status === 401) {
        router.replace("/401");
        return;
        }
        setLoading(false);
        setError("Failed to load profile data");
      }
    };

    loadProfile();
  }, []);

  const handleLogout = async () => {
    // Clear localStorage
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    
    // Clear the auth cookie by calling logout API
    try {
      await fetch("/api/logout", { method: "POST" });
    } catch (error) {
      console.log("Logout error:", error);
    }
    
    // Redirect to login
    router.push("/login");
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <h1>Dashboard</h1>
        <button 
          onClick={handleLogout}
          style={{
            padding: "10px 20px",
            backgroundColor: "#dc2626",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div style={{ backgroundColor: "#f3f4f6", padding: "20px", borderRadius: "8px" }}>
        <h2>Profile Information</h2>
        <p><strong>Email from Login:</strong> {email}</p>
        {profile && (
          <>
            <p><strong>Name:</strong> {profile.name}</p>
            <p><strong>Email:</strong> {profile.email}</p>
          </>
        )}
      </div>
    </div>
  );
}