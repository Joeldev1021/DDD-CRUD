import { DomainFormatException } from "./domian.format.exception.js";

export class InvalidPasswordFormatException extends DomainFormatException {
	constructor() {
		super("invalid format password");
	}
}
