import { Router } from "express";
import asyncMiddleware from "../../../middlewares/async";
import authMiddleware from "../../../middlewares/auth";
import { me, fetch, create } from "../../../controller/auth/auth.controller";
let middlewares = [authMiddleware];

const router = Router();

router.route("user/me").get(...middlewares, asyncMiddleware(me));

router.route("user/fetch").get(...middlewares, asyncMiddleware(fetch));

router.route("user/create").post(asyncMiddleware(create));

export default router;
