import formatMoney from '@utils/format-money';

describe('format money', () => {
	it('formats basic numbers', () => {
		expect(formatMoney(100)).toBe('$1.00');
		expect(formatMoney(100, 'USD')).toBe('$1.00');
		expect(formatMoney(-100, 'USD')).toBe('-$1.00');
		expect(formatMoney(0.001, 'USD')).toBe('$0.00');
		expect(formatMoney(Infinity, 'USD', 'en-US')).toBe('$∞');
	});

	it('throws for invalid arguments', () => {
		expect(() => formatMoney(100, 'en-US')).toThrow();
	});
});
