import { TaskIdNotFoundUseException } from "../../errors/task/task.id.not.found.execption.js";

import { UuidVO } from "../../../domain/value-object/uuid.vo.js";

export class TaskFindByIdUseCase {
	constructor({ taskRepository }) {
		this.taskRepository = taskRepository;
	}

	async execute(id) {
		const taskId = new UuidVO(id);
		const existedTask = await this.taskRepository.findById(taskId);

		if (!existedTask) {
			throw new TaskIdNotFoundUseException();
		}
		return existedTask;
	}
}
