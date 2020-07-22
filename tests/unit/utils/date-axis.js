import generateDateAxis from '@utils/date-axis';

const sampleData = [
	{ x: new Date(1972, 1, 1), y: 125 },
	{ x: new Date(1975, 1, 1), y: 257 },
	{ x: new Date(1985, 1, 1), y: 345 },
	{ x: new Date(1988, 1, 1), y: 515 },
	{ x: new Date(1991, 1, 1), y: 132 },
	{ x: new Date(1993, 1, 1), y: 305 },
	{ x: new Date(2009, 1, 1), y: 270 },
	{ x: new Date(2010, 1, 1), y: 470 },
	{ x: new Date(2011, 1, 1), y: 105 },
	{ x: new Date(2014, 1, 1), y: 900 },
];

const sampleDataSmall = [
	{ x: new Date(1973, 1, 1), y: 125 },
	{ x: new Date(1975, 1, 1), y: 257 },
	{ x: new Date(1985, 1, 1), y: 345 },
];

const sampleDataSmall2 = [
	{ x: new Date(1970, 1, 1), y: 125 },
	{ x: new Date(1970, 6, 1), y: 125 },
	{ x: new Date(1975, 1, 1), y: 257 },
	{ x: new Date(1979, 1, 1), y: 345 },
];

describe('generates date-axis from list of dates', () => {
	it('correctly calculate data with precision 5', () => {
		expect(generateDateAxis(sampleData, 5)).toStrictEqual([
			new Date(1970, 1, 1),
			new Date(1975, 1, 1),
			new Date(1980, 1, 1),
			new Date(1985, 1, 1),
			new Date(1990, 1, 1),
			new Date(1995, 1, 1),
			new Date(2000, 1, 1),
			new Date(2005, 1, 1),
			new Date(2010, 1, 1),
			new Date(2015, 1, 1),
		]);
	});

	it('calculates result with smaller input than precision', () => {
		expect(generateDateAxis(sampleDataSmall, 5)).toStrictEqual([
			new Date(1970, 1, 1),
			new Date(1975, 1, 1),
			new Date(1980, 1, 1),
			new Date(1985, 1, 1),
		]);

		expect(generateDateAxis(sampleDataSmall2, 5)).toStrictEqual([
			new Date(1970, 1, 1),
			new Date(1975, 1, 1),
			new Date(1980, 1, 1),
		]);
	});
});
