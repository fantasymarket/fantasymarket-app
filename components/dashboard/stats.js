import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import formatMoney from 'utils/format-money';
import roundToMultiple from 'utils/round-to-multiple';

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

var Stats = ({ total, total24h }) => {
	total = parseFloat(total, 10);
	total24h = parseFloat(total24h, 10);

	const positiv = total + total24h > total;
	const percentage = roundToMultiple(
		0.01,
		(total24h / (total - total24h)) * 100,
	);

	return (
		<Wrapper>
			<div>
				<h1>Total Value</h1>
				<h2>{formatMoney(total)}</h2>

				{percentage !== 0 && (
					<h3 className={positiv ? 'up' : 'down'}>
						<b>{positiv ? 'UP' : 'DOWN'}</b>
						{positiv && '+'}
						{formatMoney(total24h)} ({positiv && '+'}
						{percentage}%) in the last 24h
					</h3>
				)}
			</div>
		</Wrapper>
	);
};

Stats.propTypes = {
	total: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
	total24h: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
		.isRequired,
};

export default Stats;
