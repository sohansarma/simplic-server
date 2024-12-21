import express from "express";
import { getAllTasks } from "../../../controller/tasks/toDo.controller";

const authMiddleware = require("./../../middlewares/auth");
const checkPermissions = require("./../../middlewares/checkPermissions");
const impersonateUserPermission = require("./../../middlewares/impersonateUserPersmission");
const { dashboardValidation } = require("../../validations");

let middlewares = [authMiddleware, impersonateUserPermission, checkPermissions];
var router = express.Router();

router.route("/todo/getAllTasks").get(getAllTasks);

module.exports = router;
