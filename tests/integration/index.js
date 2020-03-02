import test from 'ava';
import withPage from './../_with-page';

test('landingPage loads', withPage, async (t, page, baseUrl) => {
	await page.goto(baseUrl + '/', { waitUntil: 'load' });
	await page.waitForSelector('#__next');

	const nextData = await page.evaluate('__NEXT_DATA__');
	t.truthy(nextData);
});
