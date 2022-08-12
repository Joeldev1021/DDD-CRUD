import { MissingFieldsFormatException } from "../errors/missing.fields.exception.js";
import { UnnecessaryFieldsException } from "../errors/unnecesary.fields.exception.js";

export class TaskController {
	constructor({ taskCreateUseCase, taskFindByIdUseCase, taskDeleteUseCase }) {
		this.taskCreateUseCase = taskCreateUseCase;
		this.taskFindByIdUseCase = taskFindByIdUseCase;
		this.taskDeleteUseCase = taskDeleteUseCase;
	}

	async create(req, res, next) {
		const { id, title, description, status, ...rest } = req.body;
		try {
			if (!id || !title || !description)
				throw new MissingFieldsFormatException();

			if (Object.keys(rest).length > 0) throw new UnnecessaryFieldsException();
			await this.taskCreateUseCase.execute(id, title, description, status);
			res.status(200).send();
		} catch (error) {
			next(error);
		}
	}

	async findById(req, res, next) {
		const { id } = req.params;
		try {
			const taskFound = await this.taskFindByIdUseCase.execute(id);
			res.status(200).json(taskFound);
		} catch (error) {
			next(error);
		}
	}

	async delete(req, res, next) {
		const { id } = req.params;
		try {
			const taskDeleted = await this.taskDeleteUseCase.execute(id);
			res.status(200).json(taskDeleted);
		} catch (error) {
			next(error);
		}
	}
}
