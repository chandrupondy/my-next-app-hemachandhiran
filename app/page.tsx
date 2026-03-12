"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "@/components/theme-toggle";

export default function Home() {
  const [search, setSearch] = useState("");

  const items = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Orange" },
    { id: 4, name: "Mango" },
    { id: 5, name: "Pineapple" },
  ];

  // Filter items based on search input
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      
      {/* Theme Toggle */}
      <div className="flex justify-end">
        <ThemeToggle />
      </div>

      <div className="mt-10">
        <h1 className="text-2xl font-bold">Home Page</h1>

        <Link href="/dashboard" className="text-blue-600 underline">
          Go to Dashboard
        </Link>

        {/* Search Section */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Search Items</h2>

          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border p-2 rounded w-64 mb-4"
          />

          {/* Filtered List */}
          <ul className="space-y-2">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <li key={item.id} className="shadow p-2 rounded">
                  {item.name}
                </li>
              ))
            ) : (
              <p>No items found</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}