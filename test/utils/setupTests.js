import { MongoMemoryReplSet } from "mongodb-memory-server";
import { bootstrap } from "../../src/bootstrap.js";
import { config as devEnvConfig } from "dotenv";

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
