import test from 'ava';
import React from 'react';

import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';

import Stock from 'components/stock';

test('Stock component', t => {
	const tree = mount(<Stock />);
	t.snapshot(toJson(tree));
});
