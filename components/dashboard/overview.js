import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import formatMoney from 'utils/format-money';
import roundTo from 'utils/round-to';

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

const Overview = ({ stocks }) => {
	return (
		<Wrapper>
			{stocks.map(stock => {
				let { symbol, name, price, price24h } = stock;
				price = parseFloat(price, 10);
				price24h = parseFloat(price24h, 10);

				const positiv = price + price24h > price;
				const percentage = roundTo(0.01, (price24h / (price - price24h)) * 100);

				return (
					<li key={stocks.indexOf(stock)} className={positiv ? 'up' : 'down'}>
						<h1>
							{name} <span>({symbol})</span>
						</h1>
						<h2>{formatMoney(stock.price)}</h2>
						<h3>
							<b>{positiv ? 'UP' : 'DOWN'}</b> {positiv && '+'}
							{percentage}%
						</h3>
					</li>
				);
			})}
			{/* <li className="up">
				<h1>Apple Inc.</h1>
				<h2>GOOG</h2>
				<h3>
					<b>UP</b> +10%
				</h3>
			</li>
			<li className="down">
				<h1>Microsoft</h1>
				<h2>GOOG</h2>
				<h3>
					<b>DOWN</b> -10%
				</h3>
			</li>
			<li className="down">
				<h1>ExxonMobil</h1>
				<h2>GOOG</h2>
				<h3>
					<b>DOWN</b> -10%
				</h3>
			</li> */}
		</Wrapper>
	);
};

Overview.propTypes = {
	stocks: PropTypes.array.isRequired,
};

export default Overview;
