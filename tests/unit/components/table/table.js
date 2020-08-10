import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Table from '@components/table';
import { columns, sampleData } from '@components/table/columns/stocks';

describe('Table component', () => {
	it('renders the component', async () => {
		const container = render(<Table columns={columns} data={sampleData} />);

		expect(container.baseElement).toMatchSnapshot();
	});

	it('can sort the table', async () => {
		const container = render(<Table columns={columns} data={sampleData} />);

		expect(container.baseElement).toMatchSnapshot();

		fireEvent(
			container.getByText('Name'),
			new MouseEvent('click', {
				bubbles: true,
				cancelable: true,
			}),
		);

		expect(container.baseElement).toMatchSnapshot();
	});
});
