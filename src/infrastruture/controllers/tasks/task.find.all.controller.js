export class TaskFindAllController {
	constructor({ taskFindAllUseCase }) {
		this.taskFindAllUseCase = taskFindAllUseCase;
	}

	async execute(req, res, next) {

		try {
			const tasksFound = await this.taskFindAllUseCase.execute();
			res.status(200).json(tasksFound);
		} catch (error) {
			next(error);
		}
	}
}
