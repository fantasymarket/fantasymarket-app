const withSC = require('@explodingcamera/next-plugin-styled-components');
const withTM = require('next-transpile-modules')([
	'lightweight-charts',
	'fancy-canvas',
]);

const dev = process.env.NODE_ENV !== 'production';

const config = {
	experimental: {
		polyfillsOptimization: true,
	},
	env: {
		apiBase:
			process.env.API_BASE || dev
				? 'http://localhost:5000/v1'
				: 'https://fantasymarket.herokuapp.com/v1',
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
	webpack: config => {
		// We need to treat .mjs files like normal .js files
		// for mobx sync to work (https://github.com/acrazing/mobx-sync/issues/14)
		config.module.rules.push({ test: /\.mjs$/, type: 'javascript/auto' });
		return config;
	},
};

module.exports = withSC(withTM(config));
