import { MissingFieldsFormatException } from "../../errors/missing.fields.exception";
import { UnnecessaryFieldsException } from "../../errors/unnecesary.fields.exception";

export class TaskUpdateController {
	constructor({ taskUpdateUseCase }) {
		this.taskFindByIdUseCase = taskUpdateUseCase;
	}

	async execute(req, res, next) {
		const { id } = req.params;
		const { title, description, status, ...rest } = req.body;
		try {
			if (!title || !description || !status)
				throw new MissingFieldsFormatException();

			if (Object.keys(rest).length > 0) throw new UnnecessaryFieldsException();
			await this.taskUpdateUseCase.execute(id, title, description, status);
			res.status(200).send();
		} catch (error) {
			next(error);
		}
	}
}
