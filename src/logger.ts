import { createLogger, format, transports } from "winston";
import DailyRotateFile from "winston-daily-rotate-file";
import env from "./env";

/**
 * Custom format to convert log levels to uppercase.
 *
 * @returns Modified `info` object with uppercase `level`.
 */
const formatLevelUpperCase = format((info) => {
  info.level = info.level.toUpperCase();
  return info;
});

/**
 * Defines the log format for Winston.
 *
 * - Includes stack traces for errors (`format.errors`) for better debugging.
 * - Adds timestamps in `YYYY-MM-DD HH:mm:ss` format.
 * - Formats messages with stack traces in non-production environments.
 */
const logFormat = format.combine(
  formatLevelUpperCase(),
  format.errors({ stack: true }),
  format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
  format.printf(({ timestamp, level, message, stack }) =>
    stack && typeof stack === "string" && env.NODE_ENV !== "production"
      ? `${timestamp} [${level.toLocaleUpperCase()}]: ${message} - ${stack}`
      : `${timestamp} [${level.toLocaleUpperCase()}]: ${message}`
  )
);

/**
 * Creates a daily rotating log transport.
 *
 * - Rotates logs daily with timestamped filenames.
 * - Enforces size limits (`maxSize`) and retention (`maxFiles`).
 * - Compresses old logs into `.gz` archives.
 *
 * @param filename - The base name for the log file.
 * @param level - The log level (default: "info").
 * @returns A configured DailyRotateFile transport.
 */
const createLogRotateTransport = (
  filename: string,
  level?: string
): DailyRotateFile =>
  new DailyRotateFile({
    filename: `logs/${filename}-%DATE%.log`,
    datePattern: "YYYY-MM-DD",
    level: level ?? "info",
    maxSize: "10m",
    maxFiles: "14d",
    zippedArchive: true,
  });

/**
 * Checks if the application is running on Vercel
 */
const isVercel = env.VERCEL === "1";

const logger = createLogger({
  level: env.LOG_LEVEL ?? "info",
  format: logFormat,
});

// Add file transports only when not running on Vercel
if (!isVercel) {
  logger.add(createLogRotateTransport("combined"));
  logger.add(createLogRotateTransport("error", "error"));

  // Add exception and rejection handlers
  logger.exceptions.handle(createLogRotateTransport("exceptions"));
  logger.rejections.handle(createLogRotateTransport("rejections"));
}

// Avoid logging to the console in production
if (env.NODE_ENV !== "production" || isVercel) {
  logger.add(
    new transports.Console({
      format: format.combine(
        formatLevelUpperCase(),
        // Only add colors if not on Vercel
        !isVercel ? format.colorize() : format.uncolorize(),
        format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
        format.printf(
          ({ timestamp, level, message }) =>
            `${timestamp} [${level}]: ${message}`
        )
      ),
    })
  );
}

export default logger;
