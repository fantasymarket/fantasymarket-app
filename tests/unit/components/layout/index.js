import React from 'react';
import { render } from '@testing-library/react';

import Layout from '@components/layout';

describe('Layout component', () => {
	const container = render(<Layout>Page Content </Layout>);

	it('renders the component', () => {
		expect(container.baseElement).toMatchSnapshot();
	});
});
