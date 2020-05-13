import React from 'react';

import PropTypes from 'prop-types';

import { useTable, useSortBy } from 'react-table';
import { FiChevronUp, FiChevronDown, FiMinus } from 'react-icons/fi';

import Table from './wrapper';

const StockTable = ({ data, columns }) => {
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
		<Table {...getTableProps}>
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
									{' '}
									{column.isSorted ? (
										column.isSortedDesc ? (
											<FiChevronDown />
										) : (
											<FiChevronUp />
										)
									) : (
										<FiMinus />
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
		</Table>
	);
};

StockTable.propTypes = {
	data: PropTypes.arrayOf(PropTypes.object).isRequired,
	columns: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default StockTable;
