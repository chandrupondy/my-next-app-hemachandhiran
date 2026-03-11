"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;
   

  return (
    <nav className="flex gap-6 p-4 bg-gray-100">
      <Link
        href="/"
        className={`px-3 py-2 rounded ${
          isActive("/") ? "bg-blue-500 text-white" : "hover:bg-gray-200"
        }`}
      >
        Home
      </Link>

      <Link
        href="/about"
        className={`px-3 py-2 rounded ${
          isActive("/about") ? "bg-blue-500 text-white" : "hover:bg-gray-200"
        }`}
      >
        About
      </Link>
    </nav>
  );
}