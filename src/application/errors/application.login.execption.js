import {ApplicationUnauthorizedExecption} from "../errors/application.unauthorized.execption.js";

export class InvalidLoginExecption  extends ApplicationUnauthorizedExecption {
	constructor() {
		super("invalid credentials login");
	}
}

