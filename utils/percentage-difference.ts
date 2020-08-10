// PercentageDifference returns the percentage difference of two numbers in percent
export default function percentageDifference(
	oldNumber: number,
	newNumber: number,
): number {
	if (oldNumber === newNumber) return 0;
	const decreaseValue = oldNumber - newNumber;
	return (decreaseValue / oldNumber) * -1 * 100;
}
