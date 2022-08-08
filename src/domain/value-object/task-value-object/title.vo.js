import { VOFormatException } from "../../errors/vo.format.exception.js";
import { ValueObject } from "../../value-object.js";

export class TitleTaskVO extends ValueObject {
	equals(valueObject) {
		return (
			valueObject instanceof TitleTaskVO && this.value === valueObject.value
		);
	}

	assertIsValid(value) {
		if (value.length > 5) {
			throw new VOFormatException(TitleTaskVO.name, value);
		}
	}
}
