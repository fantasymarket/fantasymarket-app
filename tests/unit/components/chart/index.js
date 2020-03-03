import test from 'ava';
import React from 'react';

import toJson from 'enzyme-to-json';
import { shallow, mount } from 'enzyme';

import StockChart from 'components/chart/stock';
import StockChartMinimal from 'components/chart/stock-minimal';

test('StockChart component', t => {
	const tree = shallow(<StockChart />);
	t.snapshot(toJson(tree));
});

test('StockChartMinimal component', t => {
	const tree = mount(<StockChartMinimal />);
	t.snapshot(toJson(tree));
});
