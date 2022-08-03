import { DomainFormatException } from "./domian.format.exception.js";

export class VOFormatException extends DomainFormatException {
	constructor(constructorName, value) {
		super(`${constructorName}: invalid value ${JSON.stringify(value)}`);
	}
}
