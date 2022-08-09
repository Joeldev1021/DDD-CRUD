import { ApplicationConflictExecption } from "./application.conflict.execption.js";

export class UserIdAlreadyInUseException extends ApplicationConflictExecption {
	constructor() {
		super("the Id is already used");
	}
}
