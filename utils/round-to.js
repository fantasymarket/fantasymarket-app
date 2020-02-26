const roundTo = (precision, value, roundingFunc = Math.round) => {
	if (
		typeof precision !== 'number' ||
		typeof value !== 'number' ||
		precision === 0
	) {
		throw new Error('roundTo: Invalid Value');
	}

	return Number((roundingFunc(value / precision) * precision).toFixed(13));
};

export default roundTo;
