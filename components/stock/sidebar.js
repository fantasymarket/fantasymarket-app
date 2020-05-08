import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Button from 'components/ui/button';

const SidebarWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 20rem;

	button {
		margin-bottom: 0.5rem;
	}
`;

const Stats = styled.table`
	border-collapse: collapse;
	p {
		margin: 0.2rem 0;
		font-weight: 600;
	}
	td {
		height: 2rem;
	}
	td:first-of-type p {
		font-weight: 300;
	}
	td:last-of-type p {
		text-align: right;
		font-weight: 400;
	}
`;

const Performance = styled.div`
	button {
		width: 100%;
	}

	h1 {
		margin-bottom: 1rem;
		font-size: 1.4rem;

		b {
			color: black;
			padding: 0.2rem 0.2rem 0 0.2rem;
			border-radius: 4px;
		}

		span b {
			font-size: 1.1rem;
			margin-bottom: 0.5rem;
		}

		span.down {
			color: #ff2255;
		}
		span.up {
			color: #22ff8f;
		}
		p.left {
			text-align: left;
		}

		table {
			border-collapse: collapse;
			p {
				margin: 0.2rem 0;
				font-weight: 600;
			}
			td:last-of-type p {
				margin-left: 1rem;
				text-align: left;
				font-weight: 400;
			}
		}
	}
	h2.price {
		font-size: 1.8rem;
		span {
			color: white;
		}
	}
	h2 {
		font-size: 1.2rem;
	}
`;

const Sidebar = ({ stats, changes, info, onTradeClick }) => {
	return (
		<SidebarWrapper>
			<Performance>
				<Button primary onClick={onTradeClick}>
					TRADE
				</Button>
				<br />
				<br />
				<h2 className="price">Change</h2>
				<h1>
					<table>
						<tbody>
							{changes.map(change => (
								<tr key={changes.indexOf(change)}>
									<td>
										<p>{change.name}</p>
									</td>
									<td>
										<p>
											<span className={change.direction}>{change.value}</span>
										</p>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</h1>
				{info.map(i => (
					<React.Fragment key={info.indexOf(i)}>
						<h2>{i.name}</h2>
						<h1>{i.value}</h1>
					</React.Fragment>
				))}
			</Performance>
			<br />
			<h2>Stats</h2>
			<Stats>
				<tbody>
					{stats.map(stat => (
						<tr key={stats.indexOf(stat)}>
							<td>
								<p>{stat.name}</p>
							</td>
							<td>
								<p>{stat.value}</p>
							</td>
						</tr>
					))}
				</tbody>
			</Stats>
		</SidebarWrapper>
	);
};

Sidebar.propTypes = {
	info: PropTypes.array,
	changes: PropTypes.array,
	stats: PropTypes.array,
	onTradeClick: PropTypes.func.isRequired,
};

Sidebar.defaultProps = {
	info: [
		{ name: 'Shares Owned', value: '46 Shares' },
		{ name: 'Average Cost', value: '$800' },
		{ name: 'Total Cost', value: '$36,800' },
	],
	changes: [
		{ name: '1h', value: '+2.2%', direction: 'up' },
		{ name: '24h', value: '+9.1%', direction: 'up' },
		{ name: '7d', value: '-10.1%', direction: 'down' },
	],
	stats: [
		{ name: 'Market Cap', value: '$900 Mio' },
		{ name: 'Volume (24h)', value: '582,709' },
		{ name: 'Previous Close ', value: '$1,518.15' },
		{ name: 'Open ', value: '$1,518.15' },
		{ name: '1y Target Est ', value: '$1,616.37' },
		{
			name: "Day's Range ",
			value: (
				<>
					$1,498.39
					<br />- $1,512.21
				</>
			),
		},
		{
			name: '52 Week Range',
			value: (
				<>
					$1,025.00
					<br />- $1,532.11
				</>
			),
		},
	],
};

export default Sidebar;
