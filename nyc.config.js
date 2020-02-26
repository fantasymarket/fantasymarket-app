module.exports = {
	all: true,
	exclude: [
		'.next/**/*',
		'out/**/*',
		'node_modules/**/*',
		'public',
		'*.config.*',
	],
	include: ['**', 'components/**/*.js'],
	require: ['esm', '@babel/register'],
	reporter: 'text-summary',
};
