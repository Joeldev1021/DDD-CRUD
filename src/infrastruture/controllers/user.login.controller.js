import { MissingFieldsFormatException } from "../errors/missing.fields.exception.js";
import { UnnecessaryFieldsException } from "../errors/unnecesary.fields.exception.js";
import { signJwtAsync } from "../service/jwt.service.js";

export class UserLoginController {
    constructor({userLoginUseCase}){
        this.userLoginUseCase = userLoginUseCase;
    }

    async execute(req, res, next) {
        const { email, password, ...rest } = req.body;
        try {
            if (!email || !password) throw new MissingFieldsFormatException();

            if (Object.keys(rest).length > 0) throw new UnnecessaryFieldsException();

            const id = await await this.userLoginUseCase.execute(email, password);
            const payload = { id };
            const signOptions = { algorithm: "HS512", expiresIn: "2d" };
            const token = await signJwtAsync(payload, signOptions);
            return res.send({ token });
        } catch (error) {
            next(error);
        }
    }

};
