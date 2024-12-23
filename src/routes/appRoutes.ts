import { Router } from "express";
import analyticsRoutes from "../api/v1.0/social-media/analytics.routes";
import userRoutes from "../api/v1.0/auth/auth.routes";

const router = Router();

router.use("/api/v1.0", analyticsRoutes);
router.use("/api/v1.0", userRoutes);

router.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});

export default router;
