import React from 'react';
import styled from 'styled-components';

import StockTable from 'components/table/stock-table';
import StockOverview from './overview';
import Stats from './stats';
import News from './news';

const DashboardWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const SectionTitle = styled.h1`
	font-weight: 300;
	margin-top: 2rem;
	color: rgba(255, 255, 255, 0.8);
	font-size: 1.3rem;
`;

const stockData = [
	{
		name: 'Alphabet Inc.',
		symbol: 'GOOG',
		price: '10030',
		price24h: '9300',
		shares: 10000000,
	},
	{
		name: 'Apple Inc.		',
		symbol: 'APL',
		price: '25430',
		price24h: '23000',
		shares: 10000000,
	},
	{
		name: 'Microsoft',
		symbol: 'MSFT',
		price: '23432',
		price24h: '24342',
		shares: 10000000,
	},
	{
		name: 'ExxonMobil',
		symbol: 'EXN',
		price: '23342',
		price24h: '21342',
		shares: 10000000,
	},
];

const Dashboard = ({ ...rest }) => {
	return (
		<DashboardWrapper {...rest}>
			<Stats balance={10000000} balance24h={10000000 - 12345} />
			<SectionTitle>Todays Top Gainers/Loosers</SectionTitle>
			<StockOverview stocks={stockData} />
			<br />
			{/* TODO: MAKE NEWS A CAROUSELL */}
			<SectionTitle>News (All, My Stocks)</SectionTitle>
			<News news={[]} />
			<SectionTitle>All Stocks</SectionTitle>
			<StockTable data={stockData} />
		</DashboardWrapper>
	);
};

Dashboard.propTypes = {};

export default Dashboard;
