const conf = {
	presets: [
		[
			'next/babel',
			{
				'preset-env': {
					targets: '> 2%, not dead',
					corejs: { version: 3, proposals: true },
					useBuiltIns: 'entry',
				},
				'plugin-proposal-class-properties': { loose: true },
			},
		],
	],
	plugins: [
		'@babel/plugin-proposal-optional-chaining',
		['@babel/plugin-proposal-decorators', { legacy: true }],
		[
			'module-resolver',
			{
				root: [__dirname],
				alias: {
					'@components': './components',
					'@pages': './pages',
					'@utils': './utils',
					'@api': './api',
				},
			},
		],
	],
};

module.exports = conf;
