import { InvalidLoginExecption } from "../errors/application.login.execption.js";
import bcrypt from "bcrypt";

export class UserLoginUseCase {
    constructor({ userRepository }){
        this.userRepository = userRepository;
    }

    async execute(email, password) {
        const existingUser = await this.userRepository.findByEmail(email);
        if (!existingUser) {
            throw new InvalidLoginExecption();
        }

        const passwordMatch = await bcrypt.compare(password, existingUser.password);
        if (!passwordMatch) {
            throw new InvalidLoginExecption();
        }
        return existingUser.id;
    }

};
