import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import formatMoney from 'utils/format-money';
import roundToMultiple from 'utils/round-to-multiple';
import percentageDifference from 'utils/percentage-difference';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	div {
		display: flex;
		flex-direction: column;
		justify-content: center;

		color: white;

		h1 {
			color: rgba(255, 255, 255, 0.8);
			margin-bottom: 0.45rem;
		}

		h2 {
			font-size: 5rem;
			filter: drop-shadow(0px 0px 3px rgba(34, 255, 143, 0.69));
			background-image: linear-gradient(-30deg, #00ffff, #00ff67);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
		}

		h3 {
			margin-bottom: 2rem;
			margin-left: 0.2rem;

			b {
				padding: 0.2rem 0.2rem 0 0.2rem;
				margin-right: 0.4rem;
				border-radius: 4px;
				color: black;
			}

			&.down {
				color: #ff2255;
				b {
					background-color: #ff2255;
				}
			}

			&.up {
				color: #22ff8f;
				b {
					background-color: #22ff8f;
					margin-left: 0.3rem;
				}
			}
		}

		h4 {
			font-size: 1.5rem;
			text-align: center;
		}
	}

	ul {
		display: flex;
		list-style: none;
		padding: 0;
		margin: 0;

		li {
			font-size: 1.2rem;

			color: white;
			margin: 0 2rem;
		}
	}

	@media (max-width: 750px) {
		> div h2 {
			font-size: calc(1rem + 10vw);
		}
	}
`;

var Stats = ({ balance, balance24h }) => {
	balance = parseFloat(balance, 10);
	balance24h = parseFloat(balance24h, 10);

	const diff = balance - balance24h
	const positiv = diff > 0;
	const percentage = roundToMultiple(
		0.01,
		percentageDifference(balance24h, balance),
	);

	return (
		<Wrapper>
			<div>
				<h1>Total Portfolio Value</h1>
				<h2>{formatMoney(balance)}</h2>

				{percentage !== 0 && (
					<h3 className={positiv ? 'up' : 'down'}>
						<b>{positiv ? 'UP' : 'DOWN'}</b>
						{positiv && '+'}
						{formatMoney(diff)} ({positiv && '+'}
						{percentage}%) in the last 24h
					</h3>
				)}
			</div>
		</Wrapper>
	);
};

Stats.propTypes = {
	balance: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
	balance24h: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default Stats;
