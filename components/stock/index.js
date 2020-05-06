import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import StockChart from 'components/chart/stock';

import News from './news';
import Sidebar from './sidebar';

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

const Description = styled.div`
	display: flex;
	margin-top: 3rem;

	> div {
		flex: 1;
	}

	@media (max-width: 750px) {
		flex-wrap: wrap;
	}
`;

const Stock = (stock) => {

	let { symbol, name, news, price, price24h, about } = stock;

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
					<h1>Alphabet Inc. ({symbol})</h1>
					<h1>{formatMoney(price)}</h1>
					<h3>
						<span className={positiv ? 'up' : 'down'}>
							<b>{positiv ? 'UP' : 'DOWN'}</b> {formatMoney(diff)} ({positiv && '+'}{percentage}%)
						</span>{' '}
						Today
					</h3>
				</ChartTitle>
				<StyledStockChart />
				<Description>
					<div>
						<h1>News</h1>
						<News news={news} />
					</div>
					<div>
						<h1>About</h1>
						<div>
							<p>{about}</p>
						</div>
					</div>
				</Description>
			</ChartWrapper>
			<Sidebar />
		</Wrapper>
	);
};

Stock.propTypes = {
	symbol: PropTypes.string,
	news: PropTypes.any,
	about: PropTypes.node,
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
	about: (
		<>
		</>
	),
};

export default Stock;
