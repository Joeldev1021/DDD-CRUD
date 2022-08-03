import { MissingFieldsFormatException } from "../errors/missing.fields.exception.js";
import { UnnecessaryFieldsException } from "../errors/unnecesary.fields.exception.js";

export class UserRegisterController {
     constructor({userRegisterUseCase}){
        this.userRegisterUseCase = userRegisterUseCase;
     }

    async execute(req, res, next) {
        const { id, username, email, password, ...rest } = req.body;
        try {
            if (!id || !username || !email || !password) {
                throw new MissingFieldsFormatException();
            }

            if (Object.keys(rest).length !== 0) {
                throw new UnnecessaryFieldsException();
            }
            await this.userRegisterUseCase.execute(id, username, email, password);
            // userRegisterCase
            res.status(201).send();
        } catch (error) {
            next(error);
        }
    }

};

