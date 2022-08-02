import awilix from "awilix";
import { UserLoginUseCase} from "./application/use-cases/user-login-usecase.js";
import { UserRegisterUseCase } from "./application/use-cases/user-register-usecase.js";
import { UserLoginController } from "./infrastruture/controllers/user.login.controller.js";
import { UserRegisterController} from "./infrastruture/controllers/user.register.controller.js";
import { UserRepository } from "./infrastruture/repositories/user.repository.js";


const container = awilix.createContainer({
    injectionMode: awilix.InjectionMode.PROXY 
});

// use case
container.register({
    userRegisterUseCase: awilix.asClass(UserRegisterUseCase).singleton(),
    userLoginUseCase: awilix.asClass(UserLoginUseCase).singleton()
});

// use controllers
container.register({
    userRegisterController:awilix.asClass(UserRegisterController).singleton(),
    userLoginController: awilix.asClass(UserLoginController).singleton()
});

// register
container.register({
    userRepository: awilix.asClass(UserRepository).singleton()
});


export default container;

