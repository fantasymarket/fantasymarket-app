export const sampleToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwidXNlciI6eyJ1c2VybmFtZSI6ImV4YW1wbGUiLCJ1c2VySUQiOiIxMjMifSwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjkwMDAwMDAwMDB9.VtmEiR1igdvU84AucOjVWl_C-UNX0_zosUs84FK32fc'
export const sampleError = "some error"
export const sampleUser = {
	username: "example",
	userID: "123"
}

export const mockLogin = jest.fn(({ username, password }) => Promise.resolve({
	token: sampleToken,
	user: { ...sampleUser, username },
	error: username === "" && sampleError,
}))

export const mockCreate = jest.fn(() => Promise.resolve({
	token: sampleToken,
	user: sampleUser,
}))

const mock = jest.fn().mockImplementation(() => {
	return {
		login: mockLogin,
		create: mockCreate
	};
});

export default mock;
