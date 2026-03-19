// app/dashboard/layout.tsx
import Link from "next/link";
import ThemeToggle from "@/components/theme-toggle";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-background text-foreground overflow-hidden">

      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 dark:bg-slate-950 text-white flex flex-col shadow-xl">

        {/* Logo */}
        <div className="flex items-center gap-3 px-6 py-5 border-b border-slate-700">
          <span className="text-2xl">⚡</span>
          <span className="text-lg font-bold tracking-tight">MyApp</span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-1">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest px-3 mb-3">
            Main Menu
          </p>

          <Link
            href="/dashboard"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:bg-slate-700 hover:text-white transition-all duration-200"
          >
            <span className="text-base">🏠</span>
            Overview
          </Link>

          <Link
            href="/dashboard/users"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:bg-slate-700 hover:text-white transition-all duration-200"
          >
            <span className="text-base">👥</span>
            Users
          </Link>

          <Link
            href="/dashboard/settings"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:bg-slate-700 hover:text-white transition-all duration-200"
          >
            <span className="text-base">⚙️</span>
            Settings
          </Link>

          <div className="pt-4">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest px-3 mb-3">
              Other
            </p>
            <Link
              href="/"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:bg-slate-700 hover:text-white transition-all duration-200"
            >
              <span className="text-base">🔙</span>
              Back to Home
            </Link>
          </div>
        </nav>

        {/* Sidebar Footer */}
        <div className="px-4 py-4 border-t border-slate-700">
          <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-slate-800">
            <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-sm font-bold">
              H
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">Hemachandhiran</p>
              <p className="text-xs text-slate-400 truncate">Admin</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Right Side */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* Header */}
        <header className="bg-background border-b border-slate-200 dark:border-slate-700 px-6 py-4 flex items-center justify-between shadow-sm">
          <div>
            <h1 className="text-lg font-semibold text-slate-800 dark:text-white">Dashboard</h1>
            <p className="text-xs text-slate-400 dark:text-slate-500">
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Notification Bell */}
            <button className="relative p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
              <span className="text-lg">🔔</span>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Avatar */}
            <div className="w-9 h-9 rounded-full bg-indigo-500 flex items-center justify-center text-white text-sm font-bold cursor-pointer">
              H
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto px-6 py-6 bg-slate-50 dark:bg-slate-900">
          {children}
        </main>
      </div>
    </div>
  );
}