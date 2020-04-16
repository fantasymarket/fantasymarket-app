import lighthouse from 'lighthouse';
import { URL } from 'url';

let lh;
beforeAll(async done => {
	const wsEndpoint = browser.wsEndpoint();
	lh = await lighthouse(
		__BASE_URL__,
		{
			port: new URL(wsEndpoint).port,
			// LogLevel: 'quiet',
			output: 'json',
			skipAudits: ['is-on-https', 'uses-http2', 'uses-long-cache-ttl'], // These are handled by our cdn
		},
		null,
	);

	done();
}, 20000);

describe('test lightohouse score', () => {
	it('passes all scores are with above 80%', () => {
		const { lhr } = lh;
		const scores = Object.values(lhr.categories)
			.map(c => c.score)
			.slice(0, -1); // Remove PWA test for now

		const guidline = 0.8; // Scores have to be bigger than 80%

		// const scoresHumanReadable = Object.entries(scores).map(
		// 	([title, score]) => `${title}: ${score}`,
		// );

		expect(scores.some(score => score < guidline)).toBe(false);
	});
});
