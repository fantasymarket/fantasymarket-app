/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
	packageManager: 'yarn',
	mutate: ['api/**/*.js', 'utils/**/*.js', 'api/**/*.js'],
	mutator: 'javascript',
	testRunner: 'jest',
	reporter: ['progress', 'clear-text', 'html'],
	coverageAnalysis: 'off',
	jest: {
		projectType: 'custom',
		config: require('../../jest.config'),
		enableFindRelatedTests: true,
	},
};
