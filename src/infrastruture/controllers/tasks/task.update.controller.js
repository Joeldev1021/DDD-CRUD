export class TaskUpdateController {
	constructor({ taskFindByIdUseCase }) {
		this.taskFindByIdUseCase = taskFindByIdUseCase;
	}

	async execute(req, res, next) {
		const { id } = req.params;
		try {
			const taskFound = await this.taskFindByIdUseCase.execute(id);
			res.status(200).json(taskFound);
		} catch (error) {
			next(error);
		}
	}
}
