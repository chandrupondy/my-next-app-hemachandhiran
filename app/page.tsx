"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "@/components/theme-toggle";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import { increment, decrement } from "@/features/counter/counterSlice";
import { fetchUsersRequest } from "@/features/users/userSlice";
import { useRouter } from "next/navigation";
// import ItemCrud from "@/components/itemCrud";

export default function Home() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const count = useSelector((state: RootState) => state.counter.value);
const dispatch = useDispatch<AppDispatch>();

  const items = [
    { id: 1, name: "Apple", emoji: "🍎" },
    { id: 2, name: "Banana", emoji: "🍌" },
    { id: 3, name: "Orange", emoji: "🍊" },
    { id: 4, name: "Mango", emoji: "🥭" },
    { id: 5, name: "Pineapple", emoji: "🍍" },
  ];

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Navbar */}
      <nav className="w-full bg-background border-b border-slate-200 dark:border-slate-700 shadow-sm px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">⚡</span>
          <span className="text-xl font-bold text-slate-800 dark:text-white">MyApp</span>
        </div>
        <div className="flex items-center gap-3">
          {/* Login Button */}
          <Link
            href="/login"
            className="text-sm font-medium border border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900 px-4 py-2 rounded-lg transition-colors duration-200"
          >
            🔐 Login
          </Link>
          {/* Dashboard Button */}
          <Link
            href="/dashboard"
            className="text-sm font-medium bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
          >
            Dashboard →
          </Link>
          <ThemeToggle />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-10 text-center">
        <div className="inline-block bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
          Welcome
        </div>
        <h1 className="text-5xl font-extrabold text-slate-800 dark:text-white mb-4 leading-tight">
          Discover Fresh <span className="text-indigo-600">Fruits</span>
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-lg max-w-xl mx-auto mb-8">
          Search through our collection of fresh fruits. Fast, simple, and delightful.
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="/login"
            className="text-base font-semibold bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
          >
            🚀 Get Started — Login
          </Link>
          <Link
            href="/dashboard"
            className="text-base font-semibold border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 px-6 py-3 rounded-xl transition-all duration-200"
          >
            View Dashboard
          </Link>
          <Link href="/reduxCrud" className="text-base font-semibold border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 px-6 py-3 rounded-xl transition-all duration-200"
>
  Redux CRUD
</Link>
        </div>
      </section>

      {/* Search Section */}
      <section className="max-w-2xl mx-auto px-6 pb-16">

        {/* Search Input */}
        <div className="relative mb-8">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg">🔍</span>
          <input
            type="text"
            placeholder="Search fruits..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-base transition-all duration-200"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-sm font-medium"
            >
              ✕ Clear
            </button>
          )}
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-4 px-1">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {filteredItems.length} result{filteredItems.length !== 1 ? "s" : ""} found
          </p>
          {search && (
            <span className="text-xs bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 px-2 py-1 rounded-full">
              Searching: "{search}"
            </span>
          )}
        </div>

        {/* Items Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl px-5 py-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer group"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-indigo-50 dark:bg-indigo-900 rounded-xl text-2xl group-hover:scale-110 transition-transform duration-200">
                  {item.emoji}
                </div>
                <div>
                  <p className="font-semibold text-slate-800 dark:text-white text-base">{item.name}</p>
                  <p className="text-xs text-slate-400">Fresh & Natural</p>
                </div>
                <span className="ml-auto text-slate-300 dark:text-slate-600 group-hover:text-indigo-500 transition-colors duration-200 text-lg">→</span>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-1">No results found</h3>
            <p className="text-slate-400 text-sm">Try searching with a different keyword.</p>
            <button
              onClick={() => setSearch("")}
              className="mt-4 text-sm text-indigo-600 hover:underline"
            >
              Clear search
            </button>
          </div>
        )}
      </section>
            {/* Counter Section */}
<section className="max-w-4xl mx-auto px-6 pb-10 text-center">
  <div className="inline-block bg-slate-100 dark:bg-slate-800 rounded-2xl px-6 py-4 shadow-sm">
    
    <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
      Redux Counter
    </p>

    <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">
      {count}
    </h2>

    <div className="flex items-center justify-center gap-4">
      <button
        onClick={() => dispatch(increment())}
        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition"
      >
        + Increment
      </button>

      <button
        onClick={() => dispatch(decrement())}
        className="px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition"
      >
        − Decrement
      </button>
      <button onClick={() => {console.log("Home Clicked ✅"); dispatch(fetchUsersRequest()); router.push("/reduxSaga");}} className="mt-4 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition">
      Fetch Users (Saga)
    </button>
    </div>

  </div>
</section>
{/* <ItemCrud /> */}

      {/* Footer */}
      <footer className="text-center text-sm text-slate-400 dark:text-slate-600 py-6 border-t border-slate-200 dark:border-slate-700">
        © {new Date().getFullYear()} MyApp. All rights reserved.
        <span className="mx-2">·</span>
        <Link href="/login" className="text-indigo-500 hover:underline">Login</Link>
      </footer>

    </div>
  );
}