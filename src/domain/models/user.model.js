import { UsernameVO } from "../value-object/username.vo.js";
import { UuidVO } from "../value-object/uuid.vo.js";
import { EmailVO } from "../value-object/email.vo.js";
import { PasswordVO } from "../value-object/password.vo.js";
import { InvalidUserFormatException } from "../errors/invalid.user.format.exception.js";

export class UserModel {
	/**
	 * @param {UuidVO} id
	 * @param {UsernameVO} username
	 * @param {EmailVO} email
	 * @param {PasswordVO} password
	 */
	constructor(id, username, email, password) {
		this.assertIsValid(id, username, email, password);
		this.id = id;
		this.username = username;
		this.email = email;
		this.password = password;
	}

	assertIsValid(id, username, email, password) {
		if (
			!(id instanceof UuidVO) ||
			!(username instanceof UsernameVO) ||
			!(email instanceof EmailVO) ||
			!(password instanceof PasswordVO)
		)
			throw new InvalidUserFormatException();
	}
}
