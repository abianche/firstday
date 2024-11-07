import { NextRequest, NextResponse } from "next/server";
import { db } from "../../../db";
import { users } from "../../../db/schema";

export async function GET() {
  const allUsers = await db.select().from(users);
  return NextResponse.json(allUsers);
}

export async function POST(request: NextRequest) {
  const { name, age } = await request.json();
  const newUser = await db.insert(users).values({ name, age }).returning();
  return NextResponse.json(newUser, { status: 201 });
}
