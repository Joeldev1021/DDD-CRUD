import { ApplicationConflictExecption } from "./application.conflic.execption.js";

export class UserIdAlreadyInUseException extends ApplicationConflictExecption {
	constructor() {
		super("the Id is already used");
	}
}
