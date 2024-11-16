import { NextResponse } from "next/server";
import { db } from "../../../db";
import { users } from "../../../db/schemas/users.schema";

export async function GET() {
  const allUsers = await db.select().from(users);
  return NextResponse.json(allUsers);
}
