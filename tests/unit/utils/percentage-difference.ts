import percentageDifference from '@utils/percentage-difference';

describe('percentage difference', () => {
	it('calculates basic percentages', () => {
		expect(percentageDifference(100, 100)).toBe(0);
		expect(percentageDifference(100, 0)).toBe(-100);
		expect(percentageDifference(0, 100)).toBe(Infinity);
		expect(percentageDifference(80, 100)).toBe(25);
		expect(percentageDifference(Infinity, Infinity)).toBe(0);
	});
});
