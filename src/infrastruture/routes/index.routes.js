import { Router } from "express";
import { UserRouter } from "./user.routes.js";
import { TaskRouter } from "./task.routes.js";

const router = Router();

router.use("/", UserRouter);
router.use("/task", TaskRouter);

export const IndexRoutes = router;
