import { UserModel } from "../../domain/models/user.model.js";
import { EmailVO } from "../../domain/value-object/email.vo.js";
import { PasswordVO } from "../../domain/value-object/password.vo.js";
import { UsernameVO } from "../../domain/value-object/username.vo.js";
import { UuidVO } from "../../domain/value-object/uuid.vo.js";
import { UserSchema } from "../schema/user.schema.js";
/**
 * User Mongdb repository implementation
 */
export class UserRepository {
	/**
	 * Tranforms a database user into a domian
	 * @param{*} persistent data user
	 * return Domian user
	 */
	toDomian(persistanceUser) {
		const { _id, email, username, password } = persistanceUser;
		return new UserModel(
			new UuidVO(_id),
			new UsernameVO(username),
			new EmailVO(email),
			new PasswordVO(password)
		);
	}

	/**
	 * Transforms a domain user into a database user
	 * @param {UserModel} domainUser Domain user
	 * @returns Database user
	 */
	toPersistance(domainUser) {
		const { id, username, email, password } = domainUser;
		return {
			_id: id.value,
			username: username.value,
			email: email.value,
			password: password.value,
		};
	}

	/**
	 * @param id - The id of the user you want to find.
	 * @returns The userFound to domian object is being returned.
	 */

	async findById(id) {
		const userFound = await UserSchema.findById(id.value).exec();
		if (!userFound) return null;
		return this.toDomian(userFound);
	}

	/**
	 * It takes an email address as an argument, searches the database for a user with that email address,
	 * and if it finds one, it returns the user's information
	 * @param email - The email of the user you want to find.
	 * @returns The userFound object is being returned.
	 */

	async findByEmail(email) {
		const userFound = await UserSchema.findOne({ email: email.value });
		if (!userFound) return null;
		return this.toDomian(userFound);
	}

	/**
	 * Create a new user in the database.
	 * @param domianUser - The user object that is passed in from the controller.
	 */
	async create(domianUser) {
		const persistanceUser = this.toPersistance(domianUser);

		const user = new UserSchema(persistanceUser);
		await user.save();
	}
}
