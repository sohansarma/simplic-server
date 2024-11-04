import { Router } from "express";
import analyticsRoutes from "../api/v1.0/analytics.routes";

const router = Router();

router.use("/api/v1.0", analyticsRoutes);

router.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});

export default router;
