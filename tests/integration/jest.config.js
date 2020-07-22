const path = require('path');

module.exports = {
	moduleNameMapper: {
		'\\.(css|less|sass|scss)$': '<rootDir>/tests/__mocks__/style-mock.js',
	},

	rootDir: path.join(__dirname, './../../'),

	testMatch: ['<rootDir>/tests/integration/*/**/*.[jt]s?(x)'],

	setupFiles: ['jest-localstorage-mock'],

	// A path to a module which exports an async function that is triggered once before all test suites
	setupFilesAfterEnv: ['<rootDir>/tests/integration/jest.setup.js'],
};
