import React from 'react';

import Link from 'next/link';
import formatMoney from 'utils/format-money';

export const columns = [
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
		Cell: ({ cell: { value } }) => {
			return formatMoney(parseFloat(value, 10));
		},
	},
	{
		Header: 'Market Cap',
		accessor: ({ price, shares }) => {
			return formatMoney(parseFloat(price, 10) * shares);
		},
	},
];

export const sampleData = [
	{
		name: 'Alphabet Inc.',
		symbol: 'GOOG',
		price: '10030',
		price24h: '9300',
		shares: 10000000,
	},
	{
		name: 'Apple Inc.		',
		symbol: 'APL',
		price: '25430',
		price24h: '23000',
		shares: 10000000,
	},
	{
		name: 'Microsoft',
		symbol: 'MSFT',
		price: '23432',
		price24h: '24342',
		shares: 10000000,
	},
	{
		name: 'ExxonMobil',
		symbol: 'EXN',
		price: '23342',
		price24h: '21342',
		shares: 10000000,
	},
];
