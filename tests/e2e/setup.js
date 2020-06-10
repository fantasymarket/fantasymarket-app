import jestDevServer from 'jest-dev-server';
import jestPuppeteer from 'jest-environment-puppeteer';

export default async function globalSetup() {
	await jestDevServer.setup([
		{
			port: 43210,
			command: 'serve out -l 43210',
			protocol: 'http',
			launchTimeout: 50000,
		},
		{
			port: 43211,
			command: 'start-storybook -s ./public -c .storybook -p 43211',
			protocol: 'http',
			launchTimeout: 50000,
		},
	]);

	await jestPuppeteer.setup();
}
