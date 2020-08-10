import React from 'react';
import { render } from '@testing-library/react';

import StockChart from '@components/chart/stock';
import StockChartMinimal from '@components/chart/stock-minimal';

describe('StockChart component', () => {
	const container = render(<StockChart />);

	it('renders the component', () => {
		expect(container.baseElement).toMatchSnapshot();
	});
});

describe('StockChartMinimal component', () => {
	const container = render(<StockChartMinimal />);

	it('renders the component', () => {
		expect(container.baseElement).toMatchSnapshot();
	});
});
