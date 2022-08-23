export class TaskFindByIdController {
	constructor({ taskFindByIdUseCase }) {
		this.taskFindByIdUseCase = taskFindByIdUseCase;
	}

	async execute(req, res, next) {
		const { id } = req.params;
		try {
			await this.taskFindByIdUseCase.execute(id);
			res.status(200).send();
		} catch (error) {
			next(error);
		}
	}
}
