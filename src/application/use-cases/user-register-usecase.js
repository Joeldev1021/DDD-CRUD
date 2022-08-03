import { UserModel } from "../../domain/models/user.model.js";
import { UserIdAlreadyInUseException } from "../errors/user.id.already.use.exception.js";
import { UserEmailAlreadyInUseExecption } from "../errors/user.email.already.use.exception.js";
import { UuidVO } from "../../domain/value-object/uuid.vo.js";
import { EmailVO } from "../../domain/value-object/email.vo.js";
import { UsernameVO } from "../../domain/value-object/username.vo.js";
import { PasswordVO } from "../../domain/value-object/password.vo.js";

export class UserRegisterUseCase {
	constructor({ userRepository }) {
		this.userRepository = userRepository;
	}

	async execute(id, username, email, password) {
		const userId = new UuidVO(id);
		const userEmail = new EmailVO(email);
		const newUser = new UserModel(
			userId,
			new UsernameVO(username),
			userEmail,
			await PasswordVO.create(password)
		);

		// find user by id exiting in to userRepository
		const existingUserById = await this.userRepository.findById(userId);
		if (existingUserById) {
			throw new UserIdAlreadyInUseException();
		}

		// find email existing in to userRepository
		const existingUserByEmail = await this.userRepository.findByEmail(
			userEmail
		);
		if (existingUserByEmail) {
			throw new UserEmailAlreadyInUseExecption();
		}
		// Persistance new  user db
		await this.userRepository.create(newUser);
	}
}
