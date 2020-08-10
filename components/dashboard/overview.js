import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import formatMoney from '@utils/format-money';
import roundToMultiple from '@utils/round-to-multiple';
import percentageDifference from '@utils/percentage-difference';

const Wrapper = styled.ul`
	list-style: none;
	display: flex;
	padding: 0;
	margin: 0;
	justify-content: space-between;

	li {
		margin: 0.2rem;
		color: white;

		h1 {
			font-weight: 800;
		}

		&.down h3 {
			color: #ff2255;
			b {
				background-color: #ff2255;
			}
		}

		&.up h3 {
			color: #22ff8f;
			b {
				background-color: #22ff8f;
			}
		}

		h3 {
			margin-top: 0.1rem;
			b {
				padding: 0.2rem 0.2rem 0 0.2rem;
				border-radius: 4px;
				color: black;
			}
		}
	}

	@media (max-width: 750px) {
		flex-wrap: wrap;
		> li h1 {
			font-size: calc(0.7rem + 2vw);
		}
		> li h2 {
			font-size: calc(0.4rem + 2vw);
		}
		> li h3 {
			font-size: calc(0.3rem + 2vw);
		}
	}
`;

const topGainLoose = (today, yesterday) => {
	let stocks = today.map((stock, i) => ({
		...stock,
		price24h: yesterday[i].price,
	}));
	stocks = stocks.sort((a, b) => a.diff - b.diff);

	return [...stocks.slice(0, 2), ...stocks.slice(-2)];
};

const Overview = ({ today, yesterday }) => {
	return (
		<Wrapper>
			{topGainLoose(today, yesterday).map(stock => {
				let { symbol, name } = stock;
				let price = parseFloat(stock.price, 10);
				let price24h = parseFloat(stock.price24h, 10);

				const diff = price - price24h;
				const positiv = diff > 0;
				const percentage = roundToMultiple(
					0.01,
					percentageDifference(price24h, price),
				);

				return (
					<li key={stock.symbol} className={positiv ? 'up' : 'down'}>
						<h1>
							{name} <span>({symbol})</span>
						</h1>
						<h2>{formatMoney(price)}</h2>
						<h3>
							<b>{positiv ? 'UP' : 'DOWN'}</b> {positiv && '+'}
							{percentage}%
						</h3>
					</li>
				);
			})}
		</Wrapper>
	);
};

Overview.propTypes = {
	today: PropTypes.array.isRequired,
	yesterday: PropTypes.array.isRequired,
};

export default Overview;
