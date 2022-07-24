import express from "express";
import cors from "cors";
import { config as dotenvConfig } from "dotenv";
import mongoose from "mongoose";
import { UserRouter } from "./infrastruture/routes/user.routes.js";
import { errorMiddleware } from "./infrastruture/middlewares/error.middleware.js";
dotenvConfig();

const PORT = process.env.PORT || 3000;

export const bootstrap = async () => {
	const app = express();
	app.use(express.urlencoded({ extended: false }));
	app.use(express.json());
	app.use(cors());
	app.use(UserRouter);
	// erro middleware
	app.use(errorMiddleware);
	await mongoose
		.connect(`${process.env.MONGODB_URI}`)
		.then(() => console.log("db connect"))
		.catch((err) => console.log(err));

	app.listen(PORT, () => {
		console.log("app listening on port ", PORT);
	});
};
