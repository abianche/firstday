import logger from "@/logger";

export async function GET() {
  logger.info("Hello, FirstDay!");

  return new Response("Hello, FirstDay!", {
    status: 200,
  });
}
