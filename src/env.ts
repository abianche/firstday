import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]),
  LOG_LEVEL: z
    .enum(["error", "warn", "info", "http", "verbose", "debug", "silly"])
    .optional(),
  POSTGRES_URL: z.string(),
  JWT_SECRET: z.string(),
  VERCEL: z.string().optional(),
});

const env = envSchema.parse(process.env);

export default env;
