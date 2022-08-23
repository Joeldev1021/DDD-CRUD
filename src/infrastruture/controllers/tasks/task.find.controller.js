export class TaskFindController {
	constructor({ taskFinddUseCase }) {
		this.taskDeleteUseCase = taskFinddUseCase;
	}

	async execute(req, res, next) {
		try {
			const taskFound = await this.taskFindUseCase.execute();
			res.status(200).json(taskFound);
		} catch (error) {
			next(error);
		}
	}
}
