import env from "@/env";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = env.JWT_SECRET ?? "your-secret-key"; // Replace in production

// Hash password
export async function hashPassword(password: string): Promise<string> {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
}

// Compare password
export async function verifyPassword(
  password: string,
  hash: string
): Promise<boolean> {
  return await bcrypt.compare(password, hash);
}

// Generate JWT
export function generateToken(payload: object): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });
}

// Verify JWT
export function verifyToken(token: string) {
  return jwt.verify(token, JWT_SECRET);
}
