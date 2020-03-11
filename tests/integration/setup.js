import jestDevServer from 'jest-dev-server';
import jestPuppeteer from 'jest-environment-puppeteer';

export default async function globalSetup() {
	await jestDevServer.setup({
		port: 5000,
		command: 'serve out',
		protocol: 'http',
	});

	await jestPuppeteer.setup();
}
