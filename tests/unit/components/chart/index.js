import test from 'ava';
import React from 'react';

import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

import StockChart from 'components/chart/stock';
import StockChartMinimal from 'components/chart/stock-minimal';

test('StockChart component', t => {
	const tree = shallow(<StockChart />);
	t.snapshot(toJson(tree));
});

// Currently somehow broken with enzyme
test.skip('StockChartMinimal component', t => {
	const tree = shallow(<StockChartMinimal />);
	t.snapshot(toJson(tree));
});
