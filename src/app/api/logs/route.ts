import env from "@/env";
import logger from "@/logger";
import AdmZip from "adm-zip";
import fs from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";
import * as R from "ramda";

const createLogsZip = async () => {
  const zip = new AdmZip();
  const logsDir = path.join(process.cwd(), "logs");

  try {
    const files = await fs.readdir(logsDir);
    const logFiles = R.filter((file) => file.endsWith(".log"), files);

    for (const file of logFiles) {
      const filePath = path.join(logsDir, file);
      const stats = await fs.stat(filePath);
      if (stats.isFile()) {
        const content = await fs.readFile(filePath);
        zip.addFile(file, content);
      }
    }

    return zip.toBuffer();
  } catch (error) {
    logger.error("Error creating zip file:", error);
    throw error;
  }
};

const isVercel = env.VERCEL === "1";

export async function GET() {
  if (isVercel) {
    return NextResponse.json(
      {
        error: "This endpoint is not available",
      },
      { status: 403 }
    );
  }

  try {
    const zipBuffer = await createLogsZip();
    const currentDate = new Date().toISOString().split("T")[0];

    return new NextResponse(zipBuffer, {
      headers: {
        "Content-Type": "application/zip",
        "Content-Disposition": `attachment; filename="logs-${currentDate}.zip"`,
      },
    });
  } catch (error) {
    logger.error("Error handling log request:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
