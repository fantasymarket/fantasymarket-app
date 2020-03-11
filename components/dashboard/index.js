import React from 'react';
import styled from 'styled-components';

import formatMoney from 'utils/format-money';
import { FiChevronUp, FiChevronDown, FiMinus } from 'react-icons/fi';
import { useTable, useSortBy } from 'react-table';

import Link from 'next/link';

import StockOverview from './overview';
import Stats from './stats';
import News from './news';

const DashboardWrapper = styled.div`
	display: flex;
	flex-direction: column;
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
		Header: 'Price',
		accessor: 'price',
		Cell: ({ cell: { price } }) => formatMoney(price),
	},
	{
		Header: 'Market Cap',
		accessor: ({ price, shares }) =>
			formatMoney(parseFloat(price, 10) * shares),
	},
];

const data = [
	{
		name: 'Alphabet Inc.',
		symbol: 'GOOG',
		price: '1000',
		price24h: '-22',
		shares: 10000000,
	},
	{
		name: 'Apple Inc.		',
		symbol: 'APL',
		price: '2540',
		price24h: '12',
		shares: 10000000,
	},
	{
		name: 'Microsoft',
		symbol: 'MSFT',
		price: '234234',
		price24h: '-12',
		shares: 10000000,
	},
	{
		name: 'ExxonMobil',
		symbol: 'EXN',
		price: '2342',
		price24h: '2000',
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
			<Stats total={10000000} total24h={12345} />
			<SectionTitle>Todays Top Gainers/Loosers</SectionTitle>
			<StockOverview stocks={data} />
			<br />
			{/* TODO: MAKE NEWS A CAROUSELL */}
			<SectionTitle>News (All, My Stocks)</SectionTitle>
			<News news={[]} />
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
