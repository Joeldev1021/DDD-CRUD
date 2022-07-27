import { InfrastrutureFormatException } from "./infrastruture.format.exception.js";

export class UnnecessaryFieldsException extends InfrastrutureFormatException {
	constructor() {
		super("There are leftover fields");
	}
}
