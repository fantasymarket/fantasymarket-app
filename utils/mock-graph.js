import roundTo from './round-to';

function addDays(date, days) {
	const copy = new Date(Number(date));
	copy.setDate(date.getDate() + days);
	return copy;
}

const mockGraph = ({
	count = 100,
	stock = { index: 173.43, trend: 1, fluctuation: 1 },
	startDate = new Date('2019-04-11'),
} = {}) => {
	const a = [];
	const s = stock;

	for (let i = 0; i < count; i++) {
		const x = (Math.random() - 0.5) * s.fluctuation + (i / 1000) * s.trend;
		s.index += x;
		a.push({
			time: addDays(startDate, i).toDateString(),
			value: roundTo(0.01, s.index),
		});
	}

	return a;
};

export default mockGraph;
