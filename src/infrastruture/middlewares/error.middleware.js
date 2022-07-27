import { ApplicationConflictExecption } from "../../application/errors/application.conflic.execption.js";
import { ApplicationUnauthorizedExecption } from "../../application/errors/application.unauthorized.execption.js";
import { DomainFormatException } from "../../domain/errors/domian.format.exception.js";
import { InfrastrutureFormatException } from "../errors/infrastruture.format.exception.js";

export const errorMiddleware = (error, _, res, next) => {
	if (
		error instanceof DomainFormatException ||
		error instanceof InfrastrutureFormatException
	)
		return res.status(400).send(error.message);

	if (error instanceof ApplicationConflictExecption){
		return res.status(409).send(error.message);
	}
	if(error instanceof ApplicationUnauthorizedExecption)
	   return res.status(403).send(error.message);
	

	return res.status(500).send("Error into server");
};
