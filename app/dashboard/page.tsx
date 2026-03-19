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
    const userEmail = localStorage.getItem("userEmail");
    if (userEmail) setEmail(userEmail);

    const loadProfile = async () => {
      try {
        const data = await apiFetch("/api/profile");
        setProfile(data);
        setLoading(false);
      } catch (error: any) {
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
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    try {
      await fetch("/api/logout", { method: "POST" });
    } catch (error) {
      console.log("Logout error:", error);
    }
    router.push("/login");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full min-h-[400px]">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-sm text-slate-500 dark:text-slate-400">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6">

      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-2xl px-6 py-6 flex items-center justify-between shadow-md">
        <div>
          <p className="text-indigo-200 text-sm font-medium mb-1">Welcome back 👋</p>
          <h2 className="text-2xl font-bold text-white">
            {profile?.name ?? email ?? "User"}
          </h2>
          <p className="text-indigo-200 text-sm mt-1">{email}</p>
        </div>
        <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-white text-2xl font-bold shadow-inner">
          {(profile?.name ?? email ?? "U")[0].toUpperCase()}
        </div>
      </div>

      {/* Error Alert */}
      {error && (
        <div className="flex items-center gap-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 text-red-700 dark:text-red-400 px-4 py-3 rounded-xl text-sm">
          <span className="text-lg">⚠️</span>
          {error}
        </div>
      )}

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: "Total Sessions", value: "24", icon: "📊", color: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400" },
          { label: "Active Now", value: "1", icon: "🟢", color: "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400" },
          { label: "Account Role", value: "Admin", icon: "🛡️", color: "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-background border border-slate-200 dark:border-slate-700 rounded-2xl px-5 py-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg mb-3 ${stat.color}`}>
              {stat.icon}
            </div>
            <p className="text-2xl font-bold text-slate-800 dark:text-white">{stat.value}</p>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Profile Card */}
      <div className="bg-background border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-700 flex items-center gap-2">
          <span className="text-lg">👤</span>
          <h3 className="text-base font-semibold text-slate-800 dark:text-white">Profile Information</h3>
        </div>
        <div className="px-6 py-5 space-y-4">
          {[
            { label: "Full Name", value: profile?.name ?? "—", icon: "🪪" },
            { label: "Email Address", value: profile?.email ?? email ?? "—", icon: "📧" },
            { label: "Account Type", value: "Administrator", icon: "🛡️" },
            { label: "Status", value: "Active", icon: "✅" },
          ].map((field) => (
            <div
              key={field.label}
              className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700"
            >
              <span className="text-xl w-8 text-center">{field.icon}</span>
              <div>
                <p className="text-xs text-slate-400 dark:text-slate-500 font-medium uppercase tracking-wide">
                  {field.label}
                </p>
                <p className="text-sm font-semibold text-slate-800 dark:text-white mt-0.5">
                  {field.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Logout Button */}
      <div className="flex justify-end pb-4">
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
        >
          <span>🚪</span>
          Logout
        </button>
      </div>

    </div>
  );
}
