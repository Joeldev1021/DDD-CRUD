import { DomainFormatException } from "./domian.format.exception.js";

export class InvalidIdFormatException extends DomainFormatException {
	constructor() {
		super("invalid format ID");
	}
}
