const path = require('path');

module.exports = {
	rootDir: path.join(__dirname, './../../'),

	testMatch: ['<rootDir>/tests/integration/*/**/*.[jt]s?(x)'],

	// A path to a module which exports an async function that is triggered once before all test suites
	setupFilesAfterEnv: ['<rootDir>/tests/integration/jest.setup.js'],
};
