const withSC = require('@explodingcamera/next-plugin-styled-components');
const withTM = require('next-transpile-modules')([
	'lightweight-charts',
	'fancy-canvas',
]);

const config = {};

module.exports = withSC(withTM(config));
