import { ApplicationConflictExecption } from "./application.conflic.execption.js";

export class UserEmailAlreadyInUseExecption extends ApplicationConflictExecption {
	constructor() {
		super("the email is already in used");
	}
}
