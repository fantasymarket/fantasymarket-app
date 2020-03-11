import React from 'react';
import { render } from '@testing-library/react';

import Stock from 'components/stock';

describe('Stock component', () => {
	const container = render(<Stock />);

	it('renders the component', () => {
		expect(container.firstChild).toMatchSnapshot();
	});
});
