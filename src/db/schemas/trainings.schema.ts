import {
  integer,
  pgTable,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { users } from "./users.schema";

export const trainings = pgTable("trainings", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  creatorId: integer()
    .references(() => users.id)
    .notNull(), // Link to user
  creationDate: timestamp().defaultNow().notNull(),
  lastEditorId: integer().references(() => users.id), // Optional if edits aren't mandatory
  lastEditDate: timestamp(),
  title: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 500 }), // Optional short descriptio
  content: text().notNull(), // For rich text
  status: varchar({ length: 50 }).default("draft"), // E.g., draft, published, archived
  version: integer().default(1).notNull(), // Tracks versioning
  estimatedCompletionTime: integer(), // e.g., time in minutes
  tags: varchar({ length: 255 }).array(), // Array of tags or categories
});

export const insertTrainingSchema = createInsertSchema(trainings);
export const selectTrainingSchema = createSelectSchema(trainings);
