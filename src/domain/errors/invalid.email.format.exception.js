import { DomainFormatException } from "./domian.format.exception.js";

export class InvalidEmailFormatException extends DomainFormatException {
	constructor() {
		super("invalid format email");
	}
}
