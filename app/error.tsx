"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("App Error:", error);
  }, [error]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>

      <button
        onClick={() => reset()}
        style={{
          padding: "8px 16px",
          marginTop: "10px",
          cursor: "pointer",
        }}
      >
        Try again
      </button>
    </div>
  );
}