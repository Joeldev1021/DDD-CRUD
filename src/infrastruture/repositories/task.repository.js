import { compareSync } from "bcrypt";
import { TaskModel } from "../../domain/models/task.model.js";
import { DescripTaskVO } from "../../domain/value-object/task-value-object/description.vo.js";
import { StatusTaskVO } from "../../domain/value-object/task-value-object/status.vo.js";
import { TitleTaskVO } from "../../domain/value-object/task-value-object/title.vo.js";
import { UuidVO } from "../../domain/value-object/uuid.vo.js";
import { TaskSchema } from "../schema/task.schema.js";

/**
 * Task Mongodb repository implementation
 */

export class TaskRepository {
	/**
	 * It takes a task object from the database and converts it into a task object that can be used by the
	 * domain
	 * @param toPersistanceTask - is the object that comes from the database
	 * @returns A new instance of TaskModel with the values of the toPersistanceTask object.
	 */
	toDomain(toPersistanceTask) {
		const { _id, title, description, status } = toPersistanceTask;
		return new TaskModel(
			new UuidVO(_id),
			new TitleTaskVO(title),
			new DescripTaskVO(description),
			new StatusTaskVO(status)
		);
	}

	/**
	 * This function takes a domainTask object and returns a new object with the same properties but with
	 * the values of the properties.
	 * @param domainTask - The domain object that we want to convert to a persistance object.
	 * @returns an object with the properties _id, title, description, and status.
	 */
	toPersistance(domainTask) {
		const { id, title, description, status } = domainTask;
		return {
			_id: id.value,
			title: title.value,
			description: description.value,
			status: status.value,
		};
	}

	/**
	 * @param id - The id of the task to find.
	 * @returns The task object
	 */
	async findById(id) {
		const task = await TaskSchema.findById(id.value);
		if (!task) return null;
		return this.toDomain(task);
	}

	async delete(id) {
		const taskDeleted = await TaskSchema.findByIdAndDelete(id.value);
		if (!taskDeleted) return null;
		return this.toDomain(taskDeleted);
	}

	/**
	 * Create a new task in the database.
	 * @param domianTask - The user object that is passed in from the controller.
	 */
	async create(domainTask) {
		const persistanceTask = this.toPersistance(domainTask);
		const task = new TaskSchema(persistanceTask);
		await task.save();
	}
}
