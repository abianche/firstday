import { createTask, deleteTask, getTasks, updateTask } from "@/db/logic/tasks";
import { getUserHeader, withAuth } from "@/lib/middleware";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

async function _GET(req: NextRequest) {
  try {
    const user = getUserHeader(req);

    if (!user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const userTasks = await getTasks(user.userId);
    return NextResponse.json(userTasks, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to fetch tasks" },
      { status: 500 }
    );
  }
}

async function _POST(req: NextRequest) {
  try {
    const user = getUserHeader(req);

    if (!user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const newTask = await createTask({ ...body, createdBy: user.userId });

    return NextResponse.json(newTask, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: "Invalid input", errors: error.errors },
        { status: 400 }
      );
    }
    console.error(error);
    return NextResponse.json(
      { message: "Failed to create task" },
      { status: 500 }
    );
  }
}

async function _PUT(req: NextRequest) {
  try {
    const user = getUserHeader(req);

    if (!user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const updatedTask = await updateTask(body);

    return NextResponse.json(updatedTask, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: "Invalid input", errors: error.errors },
        { status: 400 }
      );
    }
    console.error(error);
    return NextResponse.json(
      { message: "Failed to update task" },
      { status: 500 }
    );
  }
}

async function _DELETE(req: NextRequest) {
  try {
    const user = getUserHeader(req);

    if (!user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const deletedTask = await deleteTask(body);

    return NextResponse.json(
      { message: deletedTask ? "Task deleted successfully" : "Task not found" },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: "Invalid input", errors: error.errors },
        { status: 400 }
      );
    }
    console.error(error);
    return NextResponse.json(
      { message: "Failed to delete task" },
      { status: 500 }
    );
  }
}

export const GET = withAuth(_GET);
export const POST = withAuth(_POST);
export const PUT = withAuth(_PUT);
export const DELETE = withAuth(_DELETE);
