"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`relative flex items-center w-16 h-8 p-1 rounded-full transition-colors duration-300
        ${isDark ? "bg-gray-800" : "bg-yellow-300"}`}
    >
      {/* Sun */}
      <span
        className={`absolute left-2 text-sm transition-opacity duration-300
        ${isDark ? "opacity-0" : "opacity-100"}`}
      >
        🌞
      </span>

      {/* Moon */}
      <span
        className={`absolute right-2 text-sm transition-opacity duration-300
        ${isDark ? "opacity-100" : "opacity-0"}`}
      >
        🌙
      </span>

      {/* Toggle circle */}
      <span
        className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300
        ${isDark ? "translate-x-8" : "translate-x-0"}`}
      />
    </button>
  );
}