import http from 'http';
import path from 'path';
import listen from 'test-listen';
import handler from 'serve-handler';
import puppeteer from 'puppeteer';

export default async function withPage(t, run) {
	const server = http.createServer((request, response) => {
		return handler(request, response, {
			public: path.join(__dirname, './../out/'),
		});
	});

	const [baseUrl, browser] = await Promise.all([
		listen(server),
		puppeteer.launch(),
	]);

	const page = await browser.newPage();

	try {
		await run(t, page, baseUrl);
	} finally {
		await page.close();
		await browser.close();
	}
}
