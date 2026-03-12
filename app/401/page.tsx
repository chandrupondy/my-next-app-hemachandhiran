import Link from "next/link";

export default function UnauthorizedPage() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>401 - Unauthorized</h1>
      <p>You are not authorized to access this page.</p>
      <Link href="/">Go back to Home</Link>
    </div>
  );
}