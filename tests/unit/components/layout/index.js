import test from 'ava';
import React from 'react';

import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

import Layout from 'components/layout';

test('Layout component', t => {
	const tree = shallow(
		<Layout>
			<h1>Page</h1>
		</Layout>,
	);
	t.snapshot(toJson(tree));
});
