import logger from "@/logger";
import { NextResponse } from "next/server";

export async function GET() {
  logger.info("Hello, FirstDay!");

  return new NextResponse("Hello, FirstDay!", {
    status: 200,
  });
}
