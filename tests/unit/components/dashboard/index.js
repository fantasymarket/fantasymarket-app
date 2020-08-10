import React from 'react';
import Dashboard from '@components/dashboard';
import { render } from '@testing-library/react';

describe('Dashboard component', () => {
	const container = render(<Dashboard />);

	it('renders the component', () => {
		expect(container.baseElement).toMatchSnapshot();
	});
});
