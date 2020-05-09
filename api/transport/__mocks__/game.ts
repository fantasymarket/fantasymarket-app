export const sampleTime = new Date('Mon Jan 01 2001');
export const mockTime = jest.fn(async () =>
	Promise.resolve({
		time: sampleTime,
	}),
);

const mock = jest.fn().mockImplementation(() => {
	return {
		time: mockTime,
	};
});

export default mock;
