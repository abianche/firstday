import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";
import { users } from "./users.schema";

export const tasks = pgTable("tasks", {
  id: serial("id").primaryKey(), // Auto-incrementing task ID
  title: text("title").notNull(), // Task title
  description: text("description"), // Optional task description
  assignedTo: integer("assigned_to")
    .notNull()
    .references(() => users.id), // Foreign key to users table
  createdBy: integer("created_by")
    .notNull()
    .references(() => users.id), // Foreign key to users table
  dueDate: timestamp("due_date"), // Optional due date for the task
  status: text("status").default("pending").notNull(), // Task status: pending, completed, etc.
  createdAt: timestamp("created_at").defaultNow().notNull(), // Auto-set timestamp for creation
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdateFn(() => new Date()), // Auto-update timestamp for updates
});

export type Task = InferSelectModel<typeof tasks>;
export type NewTask = InferInsertModel<typeof tasks>;

export const insertTaskSchema = createInsertSchema(tasks);
export const selectTaskSchema = createSelectSchema(tasks);
