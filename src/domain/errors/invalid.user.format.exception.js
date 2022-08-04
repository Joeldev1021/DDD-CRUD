import { DomainFormatException } from "./domian.format.exception.js";

export class InvalidUserFormatException extends DomainFormatException {
	constructor() {
		super("User Format invalid");
	}
}
