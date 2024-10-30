import { Router } from "express";
import { AppDataSource } from "../config/database";

const router = Router();

router.get("/health", async (req, res) => {
  try {
    await AppDataSource.query("SELECT NOW()");
    res.status(200).json({ status: "Database connected" });
  } catch (error) {
    res.status(500).json({ status: "Database connection failed", error });
  }
});

export default router;
