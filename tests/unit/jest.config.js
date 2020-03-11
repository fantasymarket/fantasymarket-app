module.exports = {
	testMatch: ['<rootDir>/*/**/*.[jt]s?(x)'],

	// A path to a module which exports an async function that is triggered once before all test suites
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
