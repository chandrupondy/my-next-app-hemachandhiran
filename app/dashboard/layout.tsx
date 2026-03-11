// app/dashboard/layout.tsx
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      
      {/* Sidebar */}
      <aside
        style={{
          width: "250px",
          background: "#1e293b",
          color: "white",
          padding: "20px",
        }}
      >
        <h2>Dashboard</h2>
        <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Link href="/dashboard">Home</Link>
          <Link href="/dashboard/users">Users</Link>
          <Link href="/dashboard/settings">Settings</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div style={{ flex: 1 }}>
        
        {/* Header */}
        <header
          style={{
            background: "#f1f5f9",
            padding: "15px 20px",
            borderBottom: "1px solid #ddd",
          }}
        >
          <h3>Welcome to Dashboard</h3>
        </header>

        {/* Page Content */}
        <main style={{ padding: "20px" }}>{children}</main>
      </div>
    </div>
  );
}