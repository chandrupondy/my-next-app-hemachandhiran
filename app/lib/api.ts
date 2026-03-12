export async function apiFetch(url: string, options?: RequestInit) {
  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers || {})
    }
  });

  // Simulate session expiry
  if (response.status === 401) {
    if (typeof window !== "undefined") {
      localStorage.removeItem("isLoggedIn");
      window.location.href = "/login";
    }
    throw new Error("Session expired");
  }

  return response.json();
}