module.exports = {
	testMatch: ['<rootDir>/*/**/*.[jt]s?(x)'],

	preset: 'jest-puppeteer',

	// A path to a module which exports an async function that is triggered once before all test suites
	globalSetup: '<rootDir>/setup.js',

	// A path to a module which exports an async function that is triggered once after all test suites
	globalTeardown: '<rootDir>/teardown.js',

	globals: {
		__BASE_URL__: 'http://localhost:43210/',
		__STORYBOOK_URL__: 'http://localhost:43211/',
	},
};
