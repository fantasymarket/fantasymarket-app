const withTM = require('next-transpile-modules')([
	'lightweight-charts',
	'fancy-canvas',
]);

const config = {
	experimental: {
		plugins: true,
	},
};

module.exports = withTM(config);
