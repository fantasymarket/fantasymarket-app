import React from 'react';

import Stock from '@components/chart/stock';

const sampleData = JSON.parse(
	`[{"time":{"day":10,"month":4,"year":2019},"value":173.47},{"time":{"day":11,"month":4,"year":2019},"value":173.63},{"time":{"day":12,"month":4,"year":2019},"value":173.75},{"time":{"day":13,"month":4,"year":2019},"value":174.12},{"time":{"day":14,"month":4,"year":2019},"value":173.77},{"time":{"day":15,"month":4,"year":2019},"value":173.74},{"time":{"day":16,"month":4,"year":2019},"value":174.01},{"time":{"day":17,"month":4,"year":2019},"value":174.21},{"time":{"day":18,"month":4,"year":2019},"value":173.82},{"time":{"day":19,"month":4,"year":2019},"value":174.16},{"time":{"day":20,"month":4,"year":2019},"value":174.01},{"time":{"day":21,"month":4,"year":2019},"value":173.98},{"time":{"day":22,"month":4,"year":2019},"value":173.84},{"time":{"day":23,"month":4,"year":2019},"value":173.55},{"time":{"day":24,"month":4,"year":2019},"value":173.14},{"time":{"day":25,"month":4,"year":2019},"value":172.8},{"time":{"day":26,"month":4,"year":2019},"value":172.64},{"time":{"day":27,"month":4,"year":2019},"value":172.84},{"time":{"day":28,"month":4,"year":2019},"value":173.06},{"time":{"day":29,"month":4,"year":2019},"value":172.67}]`,
);

export default {
	component: Stock,
	title: 'Stock Chart',
	decorators: [],
};

export const withChart = () => <Stock data={sampleData} />;
