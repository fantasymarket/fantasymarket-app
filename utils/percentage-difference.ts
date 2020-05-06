export default function percentageDifference(oldNumber: number, newNumber: number): number {
	var decreaseValue = oldNumber - newNumber;

	return -(decreaseValue / oldNumber) * 100;
}
