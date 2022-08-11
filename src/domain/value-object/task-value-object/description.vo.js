import { VOFormatException } from "../../errors/vo.format.exception.js";
import { ValueObject } from "../../value-object.js";

export class DescripTaskVO extends ValueObject {
	equals(valueObject) {
		return (
			valueObject instanceof DescripTaskVO && this.value === valueObject.value
		);
	}

	assertIsValid(value) {
		if (value.length < 10) {
			throw new VOFormatException(DescripTaskVO.name, value);
		}
	}
}
