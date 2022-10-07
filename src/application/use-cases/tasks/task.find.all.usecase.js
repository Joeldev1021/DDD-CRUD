import { TaskIdNotFoundUseException } from "../../errors/task/task.id.not.found.execption.js";

export class TaskFindAllUseCase {
	constructor({ taskRepository }) {
		this.taskRepository = taskRepository;
	}

	async execute() {
		const allTask = await this.taskRepository.find();
		if (!allTask) throw new TaskIdNotFoundUseException();

		return allTask;
	}
}
