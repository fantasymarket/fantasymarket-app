import React from 'react';
import Layout from 'components/layout';
import { stockData } from 'components/dashboard';
import StockTable from 'components/table/stock-table';

const DashboardComponent = () => {
	return (
		<Layout>
			<h1>Your Portfolio</h1>
			<StockTable data={stockData} />
		</Layout>
	);
};

export default DashboardComponent;
