import { InfrastrutureFormatException } from "./infrastruture.format.exception.js";

export class MissingFieldsFormatException extends InfrastrutureFormatException {
	constructor() {
		super("Require fields are missing");
	}
}
