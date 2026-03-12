import Link from "next/link";
import ThemeToggle from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      
      <div className="flex justify-end">
        <ThemeToggle />
      </div>

      <div className="mt-10">
        <h1 className="text-2xl font-bold">Home Page</h1>
        <Link href="/dashboard" className="text-blue-600 underline">
          Go to Dashboard
        </Link>
      </div>

    </div>
  );
}