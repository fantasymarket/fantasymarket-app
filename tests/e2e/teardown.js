import jestDevServer from 'jest-dev-server';
import jestPuppeteer from 'jest-environment-puppeteer';

export default async function globalTeardown() {
	await jestDevServer.teardown();
	await jestPuppeteer.teardown();
}
