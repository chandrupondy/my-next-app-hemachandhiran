"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { apiFetch } from "@/lib/api";


export default function Dashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState<any>(null);

  //  useEffect(() => {
  //   const auth = localStorage.getItem("isAuthenticated");
  //   const userEmail = localStorage.getItem("userEmail");

  //   if (!auth) {
  //     router.push("/login");
  //   } else {
  //     setIsLoggedIn(true);
  //     setEmail(userEmail || "");
  //     setLoading(false);
  //   }
  // }, [router]);

   useEffect(() => {
    const loadProfile = async () => {
      try {
        const data = await apiFetch("/api/profile");
        setProfile(data);
      } catch (error) {
        console.log("Session expired");
      }
    };

    loadProfile();
  }, []);

   if (!profile) return <p>Loading...</p>;

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Name: {profile.name}</p>
      <p>Email: {profile.email}</p>
    </div>
  );
}
  
//   const logout = () => {
//   localStorage.removeItem("isLoggedIn");
//   localStorage.removeItem("userEmail");
//   localStorage.removeItem("isAuthenticated");
//   router.push("/login");
// };

// if (loading) return <p>Loading...</p>;

//   return (
//     <div>
//       {isLoggedIn ? (
//         <>
//         <h2>Welcome {email}</h2>
//         <button onClick={logout}>Logout</button>
//         </>
//       ) : (
//         <h2>Please login first</h2>
//       )}
//     </div>
//   );
  
// }