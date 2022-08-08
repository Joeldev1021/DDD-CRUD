import test from "ava";
import fetch from "node-fetch";
import { generateRandomUser } from "./utils/generateRandomUser.js";
import { expectStatusCode } from "./utils/genericExpects.js";
import { setupTests } from "./utils/setupTests.js";

setupTests(test);

const endpoint = `http://localhost:${process.env.PORT}/task`;

/* const USER_RANDOM_1 = generateRandomUser();
const USER_RANDOM_2 = generateRandomUser(); */
const TASK_RANDOM_1 = {
	id: "7c51a7b8-be68-4d89-bad2-e77ebde08329",
	title: "Testing title",
	description: "task simple example to test",
	status: false,
};

const TASK_RANDOM_2 = {
	id: "5d9516b7-cec9-49da-b565-699cf6d3969e",
	title: "Testing title",
	description: "task simple example to test 2",
	status: true,
};

const fetchRegister = async (t, user) => {
	try {
		const response = await fetch(endpoint, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user),
		});

		return response;
	} catch (err) {
		t.fail(err);
	}
};

test.serial("Task created succesfully", async (t) => {
	const response = await fetchRegister(t, TASK_RANDOM_1);

	expectStatusCode(t, 201, response);
});

test.serial("task created failed - Duplicated ID", async (t) => {
	const task = {
		...TASK_RANDOM_2,
		id: TASK_RANDOM_1.id,
	};
	const response = await fetchRegister(t, task);

	expectStatusCode(t, 409, response);
});

test("Task created failed - Invalid ID format", async (t) => {
	const task = {
		...TASK_RANDOM_1,
		id: "invalid-uuid",
	};

	const response = await fetchRegister(t, task);

	expectStatusCode(t, 400, response);
});

test("task created failed - Invalid title format", async (t) => {
	const task = {
		...TASK_RANDOM_1,
		title: "none",
	};

	const response = await fetchRegister(t, task);

	expectStatusCode(t, 400, response);
});

test("task created failed - Invalid description format", async (t) => {
	const task = {
		...TASK_RANDOM_1,
		description: "hola",
	};

	const response = await fetchRegister(t, task);

	expectStatusCode(t, 400, response);
});

test("task created failed - Invalid status format", async (t) => {
	const task = {
		...TASK_RANDOM_1,
		status: "1234",
	};

	const response = await fetchRegister(t, task);

	expectStatusCode(t, 400, response);
});

test("Register failed - Missing fields", async (t) => {
	const { id, title } = TASK_RANDOM_1;
	// missing field password
	const task = { id, title };

	const response = await fetchRegister(t, task);

	expectStatusCode(t, 400, response);
});

test("task created failed - Unnecesary fields", async (t) => {
	const task = {
		...TASK_RANDOM_1,
		age: 25,
	};

	const response = await fetchRegister(t, task);

	expectStatusCode(t, 400, response);
});
