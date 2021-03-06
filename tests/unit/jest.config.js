const path = require('path');

module.exports = {
	moduleNameMapper: {
		'\\.(css|less|sass|scss)$': '<rootDir>/tests/__mocks__/style-mock.js',
	},

	rootDir: path.join(__dirname, './../../'),

	testMatch: ['<rootDir>/tests/unit/*/**/*.[jt]s?(x)'],

	// A path to a module which exports an async function that is triggered once before all test suites
	setupFilesAfterEnv: ['<rootDir>/tests/unit/jest.setup.js'],
};
