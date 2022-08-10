import { InvalidTaskFormatException } from "../errors/invalid.task.format.exception.js";
import { UuidVO } from "../value-object/uuid.vo.js";
import { TitleTaskVO } from "../value-object/task-value-object/title.vo.js";
import { DescripTaskVO } from "../value-object/task-value-object/description.vo.js";
import { StatusTaskVO } from "../value-object/task-value-object/status.vo.js";

export class TaskModel {
	/**
	 * @param {UuidVO} id
	 * @param {titleVO} title
	 * @param {descriptionVO} description
	 * @param {statusVO} status
	 */
	constructor(id, title, description, status) {
		this.assertIsValid(id, title, description, status);
		this.id = id;
		this.title = title;
		this.description = description;
		this.status = status;
	}

	assertIsValid(id, title, description, status) {
		if (
			!(id instanceof UuidVO) ||
			!(title instanceof TitleTaskVO) ||
			!(description instanceof DescripTaskVO) ||
			!(status instanceof StatusTaskVO)
		)
			throw new InvalidTaskFormatException();
	}
}
