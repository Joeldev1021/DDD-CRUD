import { InvalidLoginExecption } from "../errors/application.login.execption.js";
import { EmailVO } from "../../domain/value-object/email.vo.js";
import { VOFormatException } from "../../domain/errors/vo.format.exception.js";
import { PlainPasswordVO } from "../../domain/value-object/plain.password.vo.js";

export class UserLoginUseCase {
	constructor({ userRepository }) {
		this.userRepository = userRepository;
	}

	async execute(email, password) {
		try {
			const userEmail = new EmailVO(email);
			const userPassword = new PlainPasswordVO(password);
			const existingUser = await this.userRepository.findByEmail(userEmail);
			if (!existingUser) {
				throw new InvalidLoginExecption();
			}

			const passwordMatch = await existingUser.password.compare(userPassword);
			if (!passwordMatch) {
				throw new InvalidLoginExecption();
			}
			return existingUser.id;
		} catch (error) {
			if (error instanceof VOFormatException) throw new InvalidLoginExecption();

			throw error;
		}
	}
}
