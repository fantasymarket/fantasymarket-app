export default function percentageDifference(
	oldNumber: number,
	newNumber: number,
): number {
	const decreaseValue = oldNumber - newNumber;

	return -(decreaseValue / oldNumber) * 100;
}
