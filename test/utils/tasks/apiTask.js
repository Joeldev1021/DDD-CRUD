import fetch from "node-fetch";
const endpoint = `http://localhost:${process.env.PORT}/task`;

export const fetchTask = async (t, task, method = "POST", id = "") => {
	console.log(method);
	console.log(id);
	try {
		const response = await fetch(`${endpoint}/${id}`, {
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

export const fetchGetTask = async (t, id = "", method = "GET") => {
	try {
		const response = await fetch(`${endpoint}/${id}`);
		return response;
	} catch (err) {
		t.fail(err);
	}
};
