// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
	clearMocks: true,
	verbose: false,
	projects: ['./tests/e2e', './tests/integration', './tests/unit'],
	rootDir: __dirname,

	coverageReporters: ['lcov'],
	collectCoverage: false,
	collectCoverageFrom: [
		'<rootDir>/api/**/*.{js,ts}',
		'<rootDir>/utils/**/*.{js,ts}',
		'<rootDir>/components/**/*.{js,ts}',
	],
};
