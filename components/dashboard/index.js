import React from 'react';
import styled from 'styled-components';

import { FiChevronUp, FiChevronDown, FiMinus } from 'react-icons/fi';
import { useTable, useSortBy } from 'react-table';

import Link from 'next/link';

const DashboardWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const Stats = styled.div`
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

const StockOverview = styled.ul`
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

const News = styled.div`
	display: flex;
	overflow-x: auto;

	> ul {
		display: flex;
		margin: 0;
		padding: 0;
		list-style: none;
		margin-bottom: 1rem;

		li {
			display: flex;
			flex-direction: column;
			width: 14rem;
			padding: 0.5rem;
			padding-left: 0;
			color: white;

			h1 {
				font-size: 1.3rem;
				display: table;
			}

			time {
				font-size: 1.1rem;
				margin-bottom: 0.4rem;
			}
		}
	}

	@media (max-width: 750px) {
		> ul li h1 {
			font-size: calc(0.7rem + 2vw);
		}
		> ul li time {
			font-size: calc(0.4rem + 2vw);
		}
	}
`;

const AllStocks = styled.table`
	color: rgb(255, 255, 255, 0.9);
	border-collapse: collapse;
	border-spacing: 0;

	tr td {
		border-top: 1px solid white;
		padding: 1rem 0;
	}

	tr {
		color: white;
		height: 2.5rem;
	}

	th {
		user-select: none;
		span svg {
			width: 20px;
			height: 20px;
			vertical-align: middle;
		}
		align-items: center;

		text-align: left;
		font-size: 1rem;
		font-weight: 800;
	}

	h1 {
		display: table;
		font-size: 1rem;
		font-weight: 400;
	}
`;

const SectionTitle = styled.h1`
	font-weight: 300;
	margin-top: 2rem;
	color: rgba(255, 255, 255, 0.8);
	font-size: 1.3rem;
`;

const columns = [
	{
		Header: 'Name',
		// eslint-disable-next-line react/prop-types
		accessor: ({ symbol, name }) => (
			<Link href="/stock/[symbol]" as={`/stock/${symbol}`}>
				<a>{name}</a>
			</Link>
		),
	},
	{
		Header: 'Symbol',
		accessor: 'symbol',
	},
	{
		Header: 'Value',
		accessor: 'value',
		Cell: ({ cell: { value } }) =>
			new Intl.NumberFormat('en-US', {
				style: 'currency',
				currency: 'USD',
			}).format(value),
	},
	{
		Header: 'Market Cap',
		accessor: ({ value, shares }) =>
			new Intl.NumberFormat('en-US', {
				style: 'currency',
				currency: 'USD',
			}).format(parseFloat(value, 10) * shares),
	},
];

const data = [
	{
		name: 'Alphabet Inc.',
		symbol: 'GOOG',
		value: '100.2',
		shares: 10000000,
	},
	{
		name: 'Apple Inc.		',
		symbol: 'APL',
		value: '112.2',
		shares: 10000000,
	},
	{
		name: 'Microsoft',
		symbol: 'MSFT',
		value: '200.2',
		shares: 10000000,
	},
	{
		name: 'ExxonMobil',
		symbol: 'EXN',
		value: '90.2',
		shares: 10000000,
	},
];

const Dashboard = ({ ...rest }) => {
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
	} = useTable(
		{
			columns,
			data,
		},
		useSortBy,
	);

	return (
		<DashboardWrapper {...rest}>
			<Stats>
				<div>
					<h1>Total Value</h1>
					<h2>$42,369.01</h2>
					<h3 className="up">
						<b>UP</b>+$3.24 (+0.31%)
					</h3>
				</div>
			</Stats>
			<SectionTitle>Todays Top Gainers/Loosers</SectionTitle>
			<StockOverview>
				<li className="up">
					<h1>Alphabet Inc.</h1>
					<h2>GOOG</h2>
					{/* {bestPerformer} */}
					<h3>
						<b>UP</b> +10%
					</h3>
				</li>
				<li className="up">
					<h1>Apple Inc.</h1>
					<h2>GOOG</h2>
					{/* {bestPerformer} */}
					<h3>
						<b>UP</b> +10%
					</h3>
				</li>
				<li className="down">
					<h1>Microsoft</h1>
					<h2>GOOG</h2>
					{/* {bestPerformer} */}
					<h3>
						<b>DOWN</b> -10%
					</h3>
				</li>
				<li className="down">
					<h1>ExxonMobil</h1>
					<h2>GOOG</h2>
					{/* {bestPerformer} */}
					<h3>
						<b>DOWN</b> -10%
					</h3>
				</li>
			</StockOverview>
			<br />
			{/* TODO: MAKE NEWS A CAROUSELL */}
			<SectionTitle>News (All, My Stocks)</SectionTitle>{' '}
			<News>
				<ul>
					<li>
						<time>6. September 2020</time>
						<h1>
							Presidential Election Looking good for the Liberal Candidate
						</h1>
					</li>
					<li>
						<time>20. April 2020</time>
						<h1>
							Deadly desease ravashes the country with 20 confirmed death - UK
						</h1>
					</li>
					<li>
						<time>21. Juli 2020</time>
						<h1>War threats between Canada and Alaska</h1>
					</li>
					<li>
						<time>20. May 2020</time>
						<h1>
							Increase travel as the first Olympic games in Hawaii are taking
							place
						</h1>
					</li>
					<li>
						<time>20. January 2017</time>
						<h1>Terror! As a horse runs around loose in a hospital</h1>
					</li>
				</ul>
			</News>
			<SectionTitle>All Stocks</SectionTitle>
			<AllStocks {...getTableProps}>
				<thead>
					{headerGroups.map(headerGroup => (
						<tr
							key={headerGroups.indexOf(headerGroup)}
							{...headerGroup.getHeaderGroupProps()}
						>
							{headerGroup.headers.map(column => (
								// Add the sorting props to control sorting. For this example
								// we can add them into the header props
								<th
									key={headerGroup.headers.indexOf(column)}
									{...column.getHeaderProps(column.getSortByToggleProps())}
								>
									{column.render('Header')}
									{/* Add a sort direction indicator */}
									<span>
										{column.isSorted ? (
											column.isSortedDesc ? (
												<>
													{' '}
													<FiChevronDown />
												</>
											) : (
												<>
													{' '}
													<FiChevronUp />
												</>
											)
										) : (
											<>
												{' '}
												<FiMinus />
											</>
										)}
									</span>
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{rows.map(row => {
						prepareRow(row);
						return (
							<tr key={rows.indexOf(row)} {...row.getRowProps()}>
								{row.cells.map(cell => {
									return (
										<td key={row.cells.indexOf(cell)} {...cell.getCellProps()}>
											{cell.render('Cell')}
										</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</AllStocks>
		</DashboardWrapper>
	);
};

Dashboard.propTypes = {};

export default Dashboard;
