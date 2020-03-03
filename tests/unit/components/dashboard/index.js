import test from 'ava';
import React from 'react';

import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

import Dashboard from 'components/dashboard';

test('Dashboard component', t => {
	const tree = shallow(<Dashboard />);
	t.snapshot(toJson(tree));
});
