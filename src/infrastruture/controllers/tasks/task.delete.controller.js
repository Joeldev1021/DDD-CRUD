export class TaskDeleteController {
	constructor({ taskDeleteUseCase }) {
		this.taskDeleteUseCase = taskDeleteUseCase;
	}

	async execute(req, res, next) {
		const { id } = req.params;
		try {
			const taskDeleted = await this.taskDeleteUseCase.execute(id);
			res.status(200).json(taskDeleted);
		} catch (error) {
			next(error);
		}
	}
}
