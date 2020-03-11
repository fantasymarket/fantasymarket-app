describe('index page', () => {
	beforeAll(async () => {
		await page.goto(__BASE_URL__ + '/');
	});

	it('loads the website', async () => {
		await page.waitForSelector('#__next');
		const nextData = await page.evaluate('__NEXT_DATA__');
		expect(nextData).toBeTruthy();
	});
});
