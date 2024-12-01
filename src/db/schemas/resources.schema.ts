import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { users } from "./users.schema";

export const resources = pgTable("resources", {
  id: serial("id").primaryKey(), // Auto-incrementing resource ID
  title: text("title").notNull(), // Resource title
  description: text("description"), // Optional resource description
  url: text("url").notNull(), // Link to the resource (e.g., PDF, document, etc.)
  category: text("category"), // Optional category for filtering resources
  createdBy: integer("created_by")
    .notNull()
    .references(() => users.id), // Foreign key to users table
  createdAt: timestamp("created_at").defaultNow().notNull(), // Timestamp for when the resource was added
});

export const insertResourceSchema = createInsertSchema(resources);
export const selectResourceSchema = createSelectSchema(resources);
