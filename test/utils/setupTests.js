import { MongoMemoryReplSet } from "mongodb-memory-server";
import { bootstrap } from "../../src/bootstrap.js";
import { config as devEnvConfig } from "dotenv";
import { TaskSchema } from "../../src/infrastruture/schema/task.schema.js";
const TASK_RANDOM_3 = {
	id: "7c41a7b8-be68-4d89-bad2-e77ebde08329",
	title: "Testing title",
	description: "task simple example to test",
	status: false,
};

const TASK_RANDOM_4 = {
	id: "5d1516b7-cec9-49da-b565-699cf6d3969e",
	title: "Testing title",
	description: "task simple example to test 2",
	status: true,
};

export const setupTests = (test) => {
	devEnvConfig();

	let mongo;

	test.before(async () => {
		mongo = await MongoMemoryReplSet.create({
			replSet: {
				count: 1,
				dbName: "dddcrud",
			},
		});

		process.env.MONGODB_URI = mongo.getUri();

		await bootstrap();
	});

	test.after(async () => {
		if (mongo) await mongo.stop();
	});
};
