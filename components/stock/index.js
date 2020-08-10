import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import StockChart from '@components/chart/stock';

import Sidebar from './sidebar';
import Description from './description';

import formatMoney from '@utils/format-money';
import roundToMultiple from '@utils/round-to-multiple';
import percentageDifference from '@utils/percentage-difference';

import OrderModal from './order-modal';

const Wrapper = styled.div`
	display: flex;
	margin-top: 3rem;

	@media (max-width: 750px) {
		margin-top: 0;
		flex-wrap: wrap;
	}
`;

const ChartWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-right: 2rem;
`;

const StyledStockChart = styled(StockChart)`
	height: 40vh;
	min-height: 30rem;

	@media (max-width: 750px) {
		height: 30vh;
		min-height: 10rem;
	}
`;

const ChartTitle = styled.div`
	h1 {
		&:last-of-type {
			font-weight: 400;
		}
	}

	h3 {
		span.down {
			color: #22ff8f;
		}
		b {
			background-color: #22ff8f;
			color: black;
			padding: 0.2rem 0.2rem 0 0.2rem;
			border-radius: 4px;
		}
	}
`;

const Stock = ({ symbol, name, news, prices, about, time }) => {
	const yesterday =
		time.ticksSinceStart - (60 * 60 * 24) / time.gameSecondsPerTick;

	let price = parseFloat(prices[prices.length - 1].price, 10);
	let price24h = parseFloat(prices?.[prices.length - 1 - yesterday]?.price, 10);

	const diff = price - price24h;
	const positiv = diff > 0;
	const percentage = roundToMultiple(
		0.01,
		percentageDifference(price24h, price),
	);

	const [orderModalActive, setOrderModalActive] = useState(false);
	const toggleModal = () => setOrderModalActive(a => !a);

	const priceData = prices.map(p => ({
		time: Number(new Date(p.date)) / 1000,
		value: parseFloat(p.price, 10) / 100,
	}));

	return (
		<Wrapper>
			<OrderModal
				active={orderModalActive}
				onToggle={toggleModal}
				stock={{ symbol, name }}
			/>
			<ChartWrapper>
				<ChartTitle>
					<h1>
						{name} ({symbol})
					</h1>
					<h1>{formatMoney(price)}</h1>
					<h3>
						<span className={positiv ? 'up' : 'down'}>
							<b>{positiv ? 'UP' : 'DOWN'}</b> {formatMoney(diff)} (
							{positiv && '+'}
							{percentage}%)
						</span>{' '}
						Today
					</h3>
				</ChartTitle>
				<StyledStockChart data={priceData} />
				<Description news={news} about={about} />
			</ChartWrapper>
			<Sidebar onTradeClick={toggleModal} />
		</Wrapper>
	);
};

Stock.propTypes = {
	symbol: PropTypes.string,
	time: PropTypes.object,
	name: PropTypes.string,
	news: PropTypes.array,
	about: PropTypes.node,
	prices: PropTypes.arrayOf(PropTypes.object),
};

Stock.defaultProps = {
	time: {},
	symbol: 'GOOG',
	name: 'Alphabet inc.',
	prices: [{ price: 102212 }],
	news: [
		{
			title: 'No News (Yet)',
			content: ':(',
		},
	],
	about: '',
};

export default Stock;
