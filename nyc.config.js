module.exports = {
	all: true,
	exclude: [
		'node_modules/**/*',
		'coverage/**/*',
		'*.config.*',
		'.next/**/*',
		'tests/**/*',
		'pages/**/*',
		'out/**/*',
		'public',
	],
	include: ['**', 'components/**/*'],
	require: ['esm', '@babel/register'],
	reporter: 'text-summary',
};
