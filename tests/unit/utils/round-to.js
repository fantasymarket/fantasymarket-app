import roundTo from 'utils/round-to';

describe('round number to precision', () => {
	it('', () => {
		expect(roundTo(5, 314.1592653)).toBe(315);
		expect(roundTo(2, 314.1592653)).toBe(314);
		expect(roundTo(13, 314.1592653)).toBe(312);
		expect(roundTo(0.1, 314.1592653)).toBe(314.2);
		expect(roundTo(1000, 514.1592653)).toBe(1000);
		expect(roundTo(0.05, 314.1592653)).toBe(314.15);
	});

	it('works with infinities', () => {
		expect(roundTo(Infinity, 10)).toBe(NaN);
		expect(roundTo(10, Infinity)).toBe(Infinity);
	});

	it('works with negative values', () => {
		expect(roundTo(5, -23)).toBe(-25);
		expect(roundTo(-20, 100)).toBe(100);
	});

	it('rounds with custom rounding function', () => {
		expect(roundTo(5, 314.1592653, Math.floor)).toBe(310);
	});

	it('throws for invalid arguments', () => {
		expect(() => roundTo(0, 314)).toThrow();
		expect(() => roundTo('20', '139.1')).toThrow();
		expect(() => roundTo('JeööpWprdöd')).toThrow();
	});
});
