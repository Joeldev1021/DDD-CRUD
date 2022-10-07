import { ApplicationConflictExecption } from "../application.conflict.execption.js";
export class TasksFoundUseException extends ApplicationConflictExecption {
    constructor() {
        super("all tasks not found");
    }
}