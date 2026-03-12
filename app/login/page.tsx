"use client";

import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const login = () => {
    localStorage.setItem("isLoggedIn", "true");
    router.push("/dashboard");
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={login}>Login</button>
    </div>
  );
}