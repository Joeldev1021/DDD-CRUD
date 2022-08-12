import fetch from "node-fetch";
const endpoint = `http://localhost:${process.env.PORT}/task`;

export const fetchTask = async (t, task, method = "POST") => {
	try {
		const response = await fetch(endpoint, {
			method,
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(task),
		});

		return response;
	} catch (err) {
		t.fail(err);
	}
};

export const fetchGetTask = async (t, taskId, method = "GET") => {
	console.log(method);
	try {
		const response = await fetch(`${endpoint}/${taskId}`, {
			method,
		});
		return response;
	} catch (err) {
		t.fail(err);
	}
};
