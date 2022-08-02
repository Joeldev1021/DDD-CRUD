export const expectStatusCode = (t, expectedCode, response) => {
	t.is(
		response.status,
		expectedCode,
		`Expected status code ${expectedCode}, but received ${response.status}`
	);
};