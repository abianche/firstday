import express from "express";
import authRoutes from "./routes/authRoutes";
import healthRoutes from "./routes/healthRoutes";

const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Welcome to FirstDay API!");
});
app.use("/auth", authRoutes);
app.use("/api", healthRoutes);

export default app;
