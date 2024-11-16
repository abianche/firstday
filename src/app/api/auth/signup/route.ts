import { db } from "@/db"; // Your Drizzle DB instance
import { users } from "@/db/schemas/users.schema";
import { hashPassword } from "@/lib/auth";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, age, email, password } = await req.json();

  if (!name || !age || !email || !password) {
    return NextResponse.json(
      { message: "All fields are required" },
      { status: 400 }
    );
  }

  const existingUser = await db
    .select()
    .from(users)
    .where(eq(users.email, email));

  if (existingUser.length > 0) {
    return NextResponse.json(
      { message: "User already exists" },
      { status: 400 }
    );
  }

  const hashedPassword = await hashPassword(password);

  const newUser = await db
    .insert(users)
    .values({
      name,
      age,
      email,
      passwordHash: hashedPassword,
    })
    .returning();

  return NextResponse.json({ user: newUser }, { status: 201 });
}
