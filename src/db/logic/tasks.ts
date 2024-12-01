import { eq } from "drizzle-orm";
import * as R from "ramda";
import { z } from "zod";
import { db } from "..";
import {
  insertTaskSchema,
  NewTask,
  Task,
  tasks,
} from "../schemas/tasks.schema";

const taskUpdateSchema = z.object({
  id: z.number().min(1),
  title: z.string().optional(),
  description: z.string().optional(),
  dueDate: z.string().optional(),
  status: z.enum(["pending", "completed"]).optional(),
});

const taskDeleteSchema = z.object({
  id: z.number().min(1),
});

export async function getTasks(userId: number) {
  z.number().parse(userId);

  const userTasks = await db
    .select()
    .from(tasks)
    .where(eq(tasks.assignedTo, userId));

  return userTasks;
}

export async function createTask(task: NewTask) {
  const updateData = {
    ...task,
    dueDate: task.dueDate ? new Date(task.dueDate) : undefined,
  };
  const data = insertTaskSchema.parse(updateData);

  const newTask = await db.insert(tasks).values(data).returning();

  return newTask;
}

export async function updateTask(task: Omit<Task, "id">) {
  const data = taskUpdateSchema.parse(task);
  const updateData = {
    ...data,
    dueDate: data.dueDate ? new Date(data.dueDate) : undefined,
  };

  const updatedTask = await db
    .update(tasks)
    .set(updateData)
    .where(eq(tasks.id, data.id))
    .returning();

  return R.head(updatedTask);
}

export async function deleteTask(task: Task) {
  const data = taskDeleteSchema.parse(task);
  const deletedTasks = await db
    .delete(tasks)
    .where(eq(tasks.id, data.id))
    .returning();
  const deletedTask: Task | undefined = R.head(deletedTasks);

  return deletedTask;
}
