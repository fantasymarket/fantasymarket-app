import React from 'react';

import Stock from '@components/chart/stock-minimal';

export default {
	component: Stock,
	title: 'Stock Chart (Minimal)',
	decorators: [],
};

export const withChart = () => <Stock />;
