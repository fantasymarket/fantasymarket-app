import React from 'react';
import Button from './button';

import StockTable from '@components/table';
import { columns, sampleData } from '@components/table/columns/stocks';

export default {
	component: Button,
	title: 'Button',
	decorators: [],
};

export const withSorting = () => (
	<StockTable data={sampleData} columns={columns} />
);
