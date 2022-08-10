import awilix from "awilix";
import { UserLoginUseCase } from "./application/use-cases/user-login-usecase.js";
import { UserRegisterUseCase } from "./application/use-cases/user-register-usecase.js";
import { UserLoginController } from "./infrastruture/controllers/user.login.controller.js";
import { UserRegisterController } from "./infrastruture/controllers/user.register.controller.js";
import { UserRepository } from "./infrastruture/repositories/user.repository.js";
/* task import  */
import { TaskController } from "./infrastruture/controllers/task.controller.js";
import { TaskRepository } from "./infrastruture/repositories/task.repository.js";
/// use case
import { TaskCreateUseCase } from "./application/use-cases/tasks/task-create.usecase.js";
import { TaskDeleteUseCase } from "./application/use-cases/tasks/task-delete.usecase.js";
import { TaskFindByIdUseCase } from "./application/use-cases/tasks/task-findById.usecase.js";

const container = awilix.createContainer({
	injectionMode: awilix.InjectionMode.PROXY,
});

// use case
container.register({
	userRegisterUseCase: awilix.asClass(UserRegisterUseCase).singleton(),
	userLoginUseCase: awilix.asClass(UserLoginUseCase).singleton(),
});

// use controllers
container.register({
	userRegisterController: awilix.asClass(UserRegisterController).singleton(),
	userLoginController: awilix.asClass(UserLoginController).singleton(),
});

// register repository
container.register({
	userRepository: awilix.asClass(UserRepository).singleton(),
});

// ===============task =====================

// task use-case
container.register({
	taskCreateUseCase: awilix.asClass(TaskCreateUseCase).singleton(),
	taskFindByIdUseCase: awilix.asClass(TaskFindByIdUseCase).singleton(),
	taskDeleteUseCase: awilix.asClass(TaskDeleteUseCase).singleton(),
});

// task controller
container.register({
	taskController: awilix.asClass(TaskController).singleton(),
});

// task respository
container.register({
	taskRepository: awilix.asClass(TaskRepository).singleton(),
});

export default container;
