import { integer, pgTable, timestamp, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

export const users = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(), // For login
  passwordHash: varchar({ length: 255 }).notNull(), // Store hashed password
  createdAt: timestamp().defaultNow(), // For auditing
  updatedAt: timestamp()
    .defaultNow()
    .$onUpdateFn(() => new Date()),
});

export const insertUserSchema = createInsertSchema(users);
export const selectUserSchema = createSelectSchema(users);
