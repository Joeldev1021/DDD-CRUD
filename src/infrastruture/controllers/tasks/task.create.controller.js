import { MissingFieldsFormatException } from "../../errors/missing.fields.exception.js";
import { UnnecessaryFieldsException } from "../../errors/unnecesary.fields.exception.js";

export class TaskCreateController {
	constructor({ taskCreateUseCase }) {
		this.taskCreateUseCase = taskCreateUseCase;
	}

	async execute(req, res, next) {
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
}
