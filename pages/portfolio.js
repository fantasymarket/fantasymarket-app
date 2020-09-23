import React from 'react';
import Layout from '@components/layout';

// Import StockTable from '@components/table';
// import { columns } from '@components/table/columns/stocks';

const PortfolioComponent = () => {
	return (
		<Layout>
			<h1>Your Portfolio</h1>
			<br />
			<h2>
				You haven't bought any stocks yet. Head over to your Dashboard to get
				started!
			</h2>
			{/* <StockTable data={[]} columns={columns} /> */}
		</Layout>
	);
};

export default PortfolioComponent;
