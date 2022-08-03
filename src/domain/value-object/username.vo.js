import { VOFormatException } from "../errors/vo.format.exception.js";
import { ValueObject } from "../value-object.js";

const USERNAME_REGEX =
	/^[A-ZÀ-ŐÖØ-öø-ÿ-łŪž0-9]([._-](?![._-])|[A-ZÀ-ŐÖØ-öø-ÿ-łŪž0-9\s-']){3,18}[A-ZÀ-ŐÖØ-öø-ÿ-Ū-ž-ł0-9\s-']$/i;

export class UsernameVO extends ValueObject {
	equals(valueObject) {
		return (
			valueObject instanceof UsernameVO && this.value === valueObject.value
		);
	}

	assertIsValid(value) {
		if (!USERNAME_REGEX.test(value)) {
			throw new VOFormatException(UsernameVO.name, value);
		}
	}
}
