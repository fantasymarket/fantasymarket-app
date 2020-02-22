import test from 'ava';
import React from 'react';
import render from 'react-test-renderer';

import Layout from 'components/layout';

test('Layout component', t => {
	const tree = render
		.create(
			<Layout>
				<h1>Page</h1>
			</Layout>,
		)
		.toJSON();
	t.snapshot(tree);
});
