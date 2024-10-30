import express from "express";

declare global {
  namespace Express {
    interface Request {
      user?: string | jwt.JwtPayload; // Adjust the type based on what `jwt.verify` returns
    }
  }
}
