import { NextRequest, NextResponse } from "next/server";
import { UserJwtPayload, verifyToken } from "./auth";

export function withAuth(handler: (req: NextRequest) => Promise<NextResponse>) {
  return async (req: NextRequest) => {
    const authHeader = req.headers.get("authorization");

    if (!authHeader) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const token = authHeader.split(" ")[1];

    try {
      const decoded = verifyToken(token);
      req.headers.set("user", JSON.stringify(decoded)); // Attach user info to request
      return handler(req);
    } catch (_error) {
      return NextResponse.json({ message: "Invalid token" }, { status: 401 });
    }
  };
}

export function getUserHeader(req: NextRequest) {
  const userHeader = req.headers.get("user");

  if (!userHeader) {
    return null;
  }

  return JSON.parse(userHeader) as UserJwtPayload;
}
