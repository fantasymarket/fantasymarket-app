import test from 'ava';
import withPage from './../_with-page';
import lighthouse from 'lighthouse';
import { URL } from 'url';

test('landingPage loads', withPage, async (t, { page, baseUrl }) => {
	t.timeout(1000 * 10);

	await page.goto(baseUrl + '/', { waitUntil: 'load' });
	await page.waitForSelector('#__next');

	const nextData = await page.evaluate('__NEXT_DATA__');
	t.truthy(nextData);
});

test('lighthouse score', withPage, async (t, { baseUrl, browser }) => {
	t.timeout(1000 * 20);

	const wsEndpoint = browser.wsEndpoint();

	const { lhr } = await lighthouse(
		baseUrl,
		{
			port: new URL(wsEndpoint).port,
			// LogLevel: 'quiet',
			output: 'json',
			skipAudits: ['is-on-https', 'uses-http2', 'uses-long-cache-ttl'], // These are handled by our cdn
		},
		null,
	);

	const scores = Object.values(lhr.categories)
		.map(c => c.score)
		.slice(0, -1); // Remove PWA test for now

	const guidline = 0.8; // Scores have to be bigger than 80%

	const scoresHumanReadable = Object.entries(scores).map(
		([title, score]) => `${title}: ${score}`,
	);

	t.log(`Lighouse Scores: ${scoresHumanReadable} (minimum score: ${guidline})`);

	t.false(scores.some(score => score < guidline));
});
