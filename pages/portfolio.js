import React from 'react';
import Layout from '@components/layout';

import StockTable from '@components/table';
import { columns, sampleData } from '@components/table/columns/stocks';

const PortfolioComponent = () => {
	return (
		<Layout>
			<h1>Your Portfolio</h1>
			<StockTable data={sampleData} columns={columns} />
		</Layout>
	);
};

export default PortfolioComponent;
