import jestDevServer from 'jest-dev-server';
import jestPuppeteer from 'jest-environment-puppeteer';

export default async function globalSetup() {
	await jestDevServer.setup({
		port: 5123,
		command: 'serve out -l 5123',
		protocol: 'http',
		launchTimeout: 50000,
	});

	await jestPuppeteer.setup();
}
