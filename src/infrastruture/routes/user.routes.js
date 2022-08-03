import { Router } from "express";
import container from "../../container.js";

const router = Router();

const userRegisterController = container.resolve("userRegisterController");
const userLoginController = container.resolve("userLoginController");


router.post("/register", userRegisterController.execute.bind(userRegisterController));
router.post("/login", userLoginController.execute.bind(userLoginController));

export const UserRouter = router;
