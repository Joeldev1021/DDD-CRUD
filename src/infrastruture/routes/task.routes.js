import { Router } from "express";
import container from "../../container.js";

const router = Router();

const taskCreateController = container.resolve("taskCreateController");
const taskFindByIdController = container.resolve("taskFindByIdController");
const taskDeleteController = container.resolve("taskDeleteController");
const taskUpdateController = container.resolve("taskUpdateController");
// userRegisterController.execute.bind(userRegisterController)
/* router.get("/"); */
router.post("/", taskCreateController.execute.bind(taskCreateController));
router.get("/:id", taskFindByIdController.execute.bind(taskFindByIdController));
router.put("/:id", taskUpdateController.execute.bind(taskUpdateController));
router.delete("/:id", taskDeleteController.execute.bind(taskDeleteController));

export const TaskRouter = router;
