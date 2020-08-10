import React from 'react';
import styled from 'styled-components';

import useSWR from 'swr';
import { useAPI } from '@api';

import StockTable from '@components/table';
import { columns } from '@components/table/columns/stocks';

import StockOverview from './overview';
import Stats from './stats';
// Import News from './news';

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

const Loading = styled.h2`
	font-weight: 300;
	margin-top: 1rem;
	color: rgba(255, 255, 255, 0.8);
	font-size: 1rem;
`;

const Dashboard = ({ ...rest }) => {
	const api = useAPI();

	const { data: today } = useSWR('all assets', () =>
		api.transport.assets.all(),
	);

	const { data: time } = useSWR('time', () => api.transport.game.time());

	const { data: yesterday } = useSWR(
		() => time.ticksSinceStart - (60 * 60 * 24) / time.gameSecondsPerTick,
		tick =>
			api.transport.assets.all({
				tick,
			}),
	);

	return (
		<DashboardWrapper {...rest}>
			<Stats balance={10000000} balance24h={10000000} />
			<SectionTitle>Todays Top Gainers/Loosers</SectionTitle>
			{(!today || !yesterday) && <Loading>loading...</Loading>}
			{today && yesterday && (
				<StockOverview today={today} yesterday={yesterday} />
			)}
			<br />
			{/* TODO: MAKE NEWS A CAROUSELL */}
			{/* <SectionTitle>News (All, My Stocks)</SectionTitle>
			<News news={[]} /> */}
			<SectionTitle>All Stocks</SectionTitle>
			{!today && <Loading>loading...</Loading>}
			{today && <StockTable data={today} columns={columns} />}
		</DashboardWrapper>
	);
};

Dashboard.propTypes = {};

export default Dashboard;
