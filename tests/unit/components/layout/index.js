import test from 'ava';
import React from 'react';

import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';

import Layout from 'components/layout';

test('Layout component', t => {
	const tree = mount(
		<Layout>
			<h1>Page</h1>
		</Layout>,
	);
	t.snapshot(toJson(tree));
});
