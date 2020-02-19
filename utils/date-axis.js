import roundTo from './round-to';

const generateDateAxis = (data, precision) => {
	let years = data.map(data => data.x.getUTCFullYear());
	years = years.sort((x, y) => x - y);

	const max = roundTo(precision, years[years.length - 1], Math.round);
	const min = roundTo(precision, years[0], Math.floor);

	let range = max - min;
	let totalSteps = range / precision;

	let elements = [];
	for (let step = 0; step < totalSteps + 1; step++) {
		const newYear = roundTo(precision, min) + step * precision;
		elements.push(new Date(newYear, 1, 1));
	}

	return elements;
};

export default generateDateAxis;
