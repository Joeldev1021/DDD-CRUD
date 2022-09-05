export class TaskUpdateModel {
	/**
	 * @param {titleVO}
	 *  @param {descriptionVO}
	 *  @param {statusVO}
	 * */

	constructor(title, description, status) {
		this.assertIsvalid(title, description, status);
	}

	assertIsvalid(title, description, status) {}
}
