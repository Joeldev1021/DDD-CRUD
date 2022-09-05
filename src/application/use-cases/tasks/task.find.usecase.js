import { TaskIdNotFoundUseException } from "../../errors/task/task.id.not.found.execption.js";

export class TaskFindByIdUseCase {
	constructor({ taskRepository }) {
		this.taskRepository = taskRepository;
	}

	async execute() {
		const existedTask = await this.taskRepository.find();

		if (!existedTask) {
			throw new TaskIdNotFoundUseException();
		}
		return existedTask;
	}
}
