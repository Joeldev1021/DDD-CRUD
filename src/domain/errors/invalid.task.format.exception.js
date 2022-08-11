import { DomainFormatException } from "./domian.format.exception.js";

export class InvalidTaskFormatException extends DomainFormatException {
	constructor() {
		super("Task Format invalid");
	}
}
