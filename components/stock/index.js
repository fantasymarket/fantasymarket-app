import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import StockChart from 'components/chart/stock';

import Sidebar from './sidebar';
import Description from './description';

import formatMoney from 'utils/format-money';
import roundToMultiple from 'utils/round-to-multiple';
import percentageDifference from 'utils/percentage-difference';

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

const Stock = ({ symbol, name, news, price, price24h, about }) => {
	price = parseFloat(price, 10);
	price24h = parseFloat(price24h, 10);

	const diff = price - price24h;
	const positiv = diff > 0;
	const percentage = roundToMultiple(
		0.01,
		percentageDifference(price24h, price),
	);

	return (
		<Wrapper>
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
				<StyledStockChart />
				<Description news={news} about={about} />
			</ChartWrapper>
			<Sidebar />
		</Wrapper>
	);
};

Stock.propTypes = {
	symbol: PropTypes.string,
	name: PropTypes.string,
	news: PropTypes.array,
	about: PropTypes.node,
	price: PropTypes.number,
	price24h: PropTypes.number,
};

Stock.defaultProps = {
	symbol: 'GOOG',
	price: 102212,
	price24h: 101212,
	news: [
		{
			title: 'Google did an oopsie',
			content: 'Big oof',
		},
	],
	about: null,
};

export default Stock;
