import roundToMultiple from 'utils/round-to-multiple';

describe('round number to precision', () => {
	it('', () => {
		expect(roundToMultiple(5, 314.1592653)).toBe(315);
		expect(roundToMultiple(2, 314.1592653)).toBe(314);
		expect(roundToMultiple(13, 314.1592653)).toBe(312);
		expect(roundToMultiple(0.1, 314.1592653)).toBe(314.2);
		expect(roundToMultiple(1000, 514.1592653)).toBe(1000);
		expect(roundToMultiple(0.05, 314.1592653)).toBe(314.15);
	});

	it('works with infinities', () => {
		expect(roundToMultiple(Infinity, 10)).toBe(NaN);
		expect(roundToMultiple(10, Infinity)).toBe(Infinity);
	});

	it('works with negative values', () => {
		expect(roundToMultiple(5, -23)).toBe(-25);
		expect(roundToMultiple(-20, 100)).toBe(100);
	});

	it('rounds with custom rounding function', () => {
		expect(roundToMultiple(5, 314.1592653, Math.floor)).toBe(310);
	});

	it('throws for invalid arguments', () => {
		expect(() => roundToMultiple(0, 314)).toThrow();
		expect(() => roundToMultiple('20', '139.1')).toThrow();
		expect(() => roundToMultiple('JeööpWprdöd')).toThrow();
	});
});
