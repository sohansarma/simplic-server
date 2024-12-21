import { Router } from "express";
import { fetch } from "../../../controller/social-media/analytics.controller";
import asyncMiddleware from "../../../middlewares/async";
import { validation } from "../../../validations/analytics.validation";

const router = Router();

router
  .route("/analytics/:social")
  .get(validation.fetch, asyncMiddleware(fetch));

export default router;
