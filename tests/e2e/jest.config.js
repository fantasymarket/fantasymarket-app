const path = require('path');

module.exports = {
	moduleNameMapper: {
		'\\.(css|less|sass|scss)$': '<rootDir>/tests/__mocks__/style-mock.js',
	},

	rootDir: path.join(__dirname, './../../'),

	testMatch: ['<rootDir>/tests/e2e/*/**/*.[jt]s?(x)'],

	preset: 'jest-puppeteer',

	// A path to a module which exports an async function that is triggered once before all test suites
	globalSetup: '<rootDir>/tests/e2e/setup.js',

	// A path to a module which exports an async function that is triggered once after all test suites
	globalTeardown: '<rootDir>/tests/e2e/teardown.js',

	globals: {
		__BASE_URL__: 'http://localhost:43210/',
		__STORYBOOK_URL__: 'http://localhost:43211/',
	},
};
