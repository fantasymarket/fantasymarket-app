import React from 'react';

import Table from '@components/table';
import { columns, sampleData } from '@components/table/columns/stocks';

export default {
	component: Table,
	title: 'Table',
	decorators: [],
};

export const withSorting = () => <Table data={sampleData} columns={columns} />;
