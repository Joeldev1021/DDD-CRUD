import { ApplicationConflictExecption } from "../application.conflict.execption.js";
export class TaskIdNotFoundUseException extends ApplicationConflictExecption {
	constructor() {
		super("the task with Id not found");
	}
}
