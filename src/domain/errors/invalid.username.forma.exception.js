import { DomainFormatException } from "./domian.format.exception.js";

export class InvalidUserNameFormatException extends DomainFormatException {
	constructor() {
		super("invalid format name");
	}
}
