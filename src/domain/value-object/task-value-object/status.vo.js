import { VOFormatException } from "../../errors/vo.format.exception.js";
import { ValueObject } from "../../value-object.js";

export class StatusTaskVO extends ValueObject {
	equals(valueObject) {
		return (
			valueObject instanceof StatusTaskVO && this.value === valueObject.value
		);
	}

	assertIsValid(value) {
		if (typeof value === "boolean") {
			throw new VOFormatException(StatusTaskVO.name, value);
		}
	}
}
