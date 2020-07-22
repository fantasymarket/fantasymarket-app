import React from 'react';
import styled from 'styled-components';

import StockTable from '@components/table';
import { columns, sampleData } from '@components/table/columns/stocks';

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

const Dashboard = ({ ...rest }) => {
	return (
		<DashboardWrapper {...rest}>
			<Stats balance={10000000} balance24h={10000000 - 12345} />
			<SectionTitle>Todays Top Gainers/Loosers</SectionTitle>
			<StockOverview stocks={sampleData} />
			<br />
			{/* TODO: MAKE NEWS A CAROUSELL */}
			<SectionTitle>News (All, My Stocks)</SectionTitle>
			<News news={[]} />
			<SectionTitle>All Stocks</SectionTitle>
			<StockTable data={sampleData} columns={columns} />
		</DashboardWrapper>
	);
};

Dashboard.propTypes = {};

export default Dashboard;
