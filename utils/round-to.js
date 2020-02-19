const roundTo = (precision, value, roundingFunc = Math.round) => {
	if (precision === 0 || Number.isNaN(precision)) {
		throw new Error('roundTo: Invalid Value');
	}

	return roundingFunc(value / precision) * precision;
};

export default roundTo;
