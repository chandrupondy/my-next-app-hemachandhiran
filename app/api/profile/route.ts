import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const token = req.headers.get("authorization");

  if (!token) {
    return NextResponse.json(
      { message: "Unauthorized" },
      { status: 401 }
    );
  }

  return NextResponse.json({
    name: "John Doe",
    email: "john@example.com"
  });
}