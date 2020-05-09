const path = require('path');

module.exports = {
	rootDir: path.join(__dirname, './../../'),

	testMatch: ['<rootDir>/tests/unit/*/**/*.[jt]s?(x)'],

	setupFiles: ['jest-localstorage-mock'],

	// A path to a module which exports an async function that is triggered once before all test suites
	setupFilesAfterEnv: ['<rootDir>/tests/unit/jest.setup.js'],
};
