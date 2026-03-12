import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email, password } = await request.json();

  // Mock credentials
  const MOCK_USER = {
    email: "hemachandhiran@test.com",
    password: "123456"
  };

  if (email === MOCK_USER.email && password === MOCK_USER.password) {
    const response = NextResponse.json(
      { success: true, message: "Login successful" },
      { status: 200 }
    );

    // Set the authToken cookie
    response.cookies.set("authToken", "loggedin", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7 // 7 days
    });

    return response;
  }

  return NextResponse.json(
    { success: false, message: "Invalid email or password" },
    { status: 401 }
  );
}
