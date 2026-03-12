import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const authToken = req.cookies.get("authToken");

  if (!authToken) {
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