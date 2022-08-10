import { ApplicationConflictExecption } from "../application.conflict.execption.js";
export class TaskIdAlreadyInUseException extends ApplicationConflictExecption {
	constructor() {
		super("the task with Id is already used");
	}
}
