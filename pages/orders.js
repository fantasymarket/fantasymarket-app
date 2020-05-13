import React from 'react';
import Layout from 'components/layout';

import StockTable from 'components/table';

const OrdersComponent = () => {
	return (
		<Layout>
			<h1>Your Orders</h1>
			<StockTable data={[]} columns={[]} />
		</Layout>
	);
};

export default OrdersComponent;
