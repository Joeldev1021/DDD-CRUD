import { TaskModel } from "../../../domain/models/task.model.js";
import { DescripTaskVO } from "../../../domain/value-object/task-value-object/description.vo.js";
import { StatusTaskVO } from "../../../domain/value-object/task-value-object/status.vo.js";
import { TitleTaskVO } from "../../../domain/value-object/task-value-object/title.vo.js";
import { UuidVO } from "../../../domain/value-object/uuid.vo.js";
import { TaskIdNotFoundUseException } from "../../errors/task/task.id.not.found.execption.js";

export class TaskUpdateUseCase {
	constructor({ taskRepository }) {
		this.taskRepository = taskRepository;
	}

	async execute(id, title, description, status) {
		const taskId = new UuidVO(id);
		const updateTask = new TaskModel(
			taskId,
			new TitleTaskVO(title),
			new DescripTaskVO(description),
			new StatusTaskVO(status)
		);

		const existedTask = await this.taskRepository.findById(taskId);
		if (!existedTask) {
			throw new TaskIdNotFoundUseException();
		}
		const task = await this.taskRepository.update(updateTask);
		return taskId;
	}
}
