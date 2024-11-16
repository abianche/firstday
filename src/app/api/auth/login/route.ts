import { db } from "@/db"; // Your Drizzle DB instance
import { users } from "@/db/schemas/users.schema";
import { generateToken, verifyPassword } from "@/lib/auth";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json(
      { message: "Email and password are required" },
      { status: 400 }
    );
  }

  const user = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .then((rows) => rows[0]); // Use array access to get the first result

  if (!user) {
    return NextResponse.json(
      { message: "Invalid credentials" },
      { status: 401 }
    );
  }

  const isValidPassword = await verifyPassword(password, user.passwordHash);

  if (!isValidPassword) {
    return NextResponse.json(
      { message: "Invalid credentials" },
      { status: 401 }
    );
  }

  const token = generateToken({ userId: user.id });

  return NextResponse.json({ token }, { status: 200 });
}
