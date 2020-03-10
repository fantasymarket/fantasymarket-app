const withSC = require('@explodingcamera/next-plugin-styled-components');
const withTM = require('next-transpile-modules')([
	'lightweight-charts',
	'fancy-canvas',
]);

const config = {
	experimental: {
		polyfillsOptimization: true,
	},
	async exportPathMap(defaultPathMap) {
		const pathMap = {};

		// TODO: use actual stock api to get list of stocks
		const stocks = ['GOOG', 'APL', 'MSFT', 'EXN'];
		for (const stock of stocks) {
			pathMap[`/stock/${stock}`] = { page: '/stock/[symbol]' };
		}

		return {
			...defaultPathMap,
			...pathMap,
		};
	},
};

module.exports = withSC(withTM(config));
