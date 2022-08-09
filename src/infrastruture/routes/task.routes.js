import { Router } from "express";
import container from "../../container.js";

const router = Router();

const taskController = container.resolve("taskController");
// userRegisterController.execute.bind(userRegisterController)
/* router.get("/"); */
router.post("/", taskController.create.bind(taskController));
router.get("/:id", taskController.findById.bind(taskController));
router.post("/:id", taskController.delete.bind(taskController));
/* 
router.put("/:id");
router.delete("/:id"); */

export const TaskRouter = router;
