"use server";

import { db } from "@/db";
import { users } from "@/db/schemas/users.schema";
import { generateToken, hashPassword, verifyPassword } from "@/lib/auth";
import logger from "@/logger";
import { eq } from "drizzle-orm";
import { z } from "zod";
import { fromError } from "zod-validation-error";

const userSignupSchema = z.object({
  name: z.string(),
  age: z.number(),
  email: z.string().email(),
  password: z.string(),
});
type UserSignup = z.infer<typeof userSignupSchema>;

const userLoginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});
type UserLogin = z.infer<typeof userLoginSchema>;

// Signup Action
export async function signup(data: UserSignup) {
  const validatedFields = userSignupSchema.safeParse(data);

  if (!validatedFields.success) {
    logger.error(fromError(validatedFields.error));
    throw new Error("Failed to create a user");
  }

  const { name, age, email, password } = validatedFields.data;

  const existingUser = await db
    .select()
    .from(users)
    .where(eq(users.email, email));
  if (existingUser.length > 0) {
    logger.error("User already exists");
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
export async function login(data: UserLogin) {
  const validatedFields = userLoginSchema.safeParse(data);

  if (!validatedFields.success) {
    logger.error(fromError(validatedFields.error));
    throw new Error("Invalid credentials");
  }

  const { email, password } = validatedFields.data;

  const user = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .then((rows) => rows[0]);
  if (!user) {
    logger.error("User not found");
    throw new Error("Invalid credentials");
  }

  const isValidPassword = await verifyPassword(password, user.passwordHash);
  if (!isValidPassword) {
    logger.error("Invalid password");
    throw new Error("Invalid credentials");
  }

  const token = generateToken({ userId: user.id });

  return { token, user: { id: user.id, name: user.name, email: user.email } };
}
