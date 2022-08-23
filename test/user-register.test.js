import test from "ava";
import fetch from "node-fetch";
import { generateRandomUser } from "./utils/generateRandomUser.js";
import { expectStatusCode } from "./utils/genericExpects.js";
import { setupTests } from "./utils/setupTests.js";

setupTests(test);

const endpoint = `http://localhost:${process.env.PORT}/register`;

const USER_RANDOM_1 = generateRandomUser();
const USER_RANDOM_2 = generateRandomUser();

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

test.serial("Register succesfully", async (t) => {
	const response = await fetchRegister(t, USER_RANDOM_1);

	expectStatusCode(t, 201, response);
});

test.serial("Register failed - Duplicated ID", async (t) => {
	const user = {
		...USER_RANDOM_2,
		id: USER_RANDOM_1.id,
	};
	const response = await fetchRegister(t, user);

	expectStatusCode(t, 409, response);
});

test.serial("Register failed - Duplicated email", async (t) => {
	const user = {
		...USER_RANDOM_2,
		email: USER_RANDOM_1.email,
	};

	const response = await fetchRegister(t, user);

	expectStatusCode(t, 409, response);
});

test("Register failed - Invalid ID format", async (t) => {
	const user = {
		...USER_RANDOM_1,
		id: "invalid-uuid",
	};

	const response = await fetchRegister(t, user);

	expectStatusCode(t, 400, response);
});

test("Register failed - Invalid username format", async (t) => {
	const user = {
		...USER_RANDOM_1,
		username: "name-with-./*",
	};

	const response = await fetchRegister(t, user);

	expectStatusCode(t, 400, response);
});

test("Register failed - Invalid email format", async (t) => {
	const user = {
		...USER_RANDOM_1,
		email: "emailatemail.com",
	};

	const response = await fetchRegister(t, user);

	expectStatusCode(t, 400, response);
});

test("Register failed - Invalid password format", async (t) => {
	const user = {
		...USER_RANDOM_1,
		password: "1234",
	};

	const response = await fetchRegister(t, user);

	expectStatusCode(t, 400, response);
});

test("Register failed - Missing fields", async (t) => {
	const { id, username, email } = USER_RANDOM_1;
	// missing field password
	const user = { id, username, email };

	const response = await fetchRegister(t, user);

	expectStatusCode(t, 400, response);
});

test("Register failed - Unnecesary fields", async (t) => {
	const user = {
		...USER_RANDOM_1,
		age: 25,
	};

	const response = await fetchRegister(t, user);

	expectStatusCode(t, 400, response);
});
