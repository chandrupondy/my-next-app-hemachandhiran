import Link from "next/link";

export default function About() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>About Page</h1>
      <p>This is the About page using App Router.</p>

      <Link href="/">
        Go back to Home
      </Link>
    </div>
  );
}