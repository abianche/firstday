"use server";

import { db } from "@/db";
import { users } from "@/db/schemas/users.schema";
import { hashPassword, verifyPassword, generateToken } from "@/lib/auth";
import { eq } from "drizzle-orm";

// Signup Action
export async function signup({
  name,
  age,
  email,
  password,
}: {
  name: string;
  age: number;
  email: string;
  password: string;
}) {
  if (!name || !age || !email || !password) {
    throw new Error("All fields are required");
  }

  const existingUser = await db
    .select()
    .from(users)
    .where(eq(users.email, email));
  if (existingUser.length > 0) {
    throw new Error("User already exists");
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

  return newUser[0];
}

// Login Action
export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  if (!email || !password) {
    throw new Error("Email and password are required");
  }

  const user = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .then((rows) => rows[0]);
  if (!user) {
    throw new Error("Invalid credentials");
  }

  const isValidPassword = await verifyPassword(password, user.passwordHash);
  if (!isValidPassword) {
    throw new Error("Invalid credentials");
  }

  const token = generateToken({ userId: user.id });

  return { token, user: { id: user.id, name: user.name, email: user.email } };
}
