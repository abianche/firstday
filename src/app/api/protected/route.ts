import { withAuth } from "@/lib/middleware";
import { NextRequest, NextResponse } from "next/server";

const handler = async (req: NextRequest) => {
  const user = JSON.parse(req.headers.get("user") ?? "{}");
  return NextResponse.json(
    { message: `Hello, user ${user.userId}` },
    { status: 200 }
  );
};

export const GET = withAuth(handler);
