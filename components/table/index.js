import React from 'react';

import PropTypes from 'prop-types';

import { useTable, useSortBy } from 'react-table';
import { FiChevronUp, FiChevronDown, FiMinus } from 'react-icons/fi';

import TableWrapper from './wrapper';

const Table = ({ data, columns }) => {
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
		<TableWrapper {...getTableProps}>
			<thead>
				{headerGroups.map(headerGroup => (
					<TableColumn
						headerGroup={headerGroup}
						key={headerGroups.indexOf(headerGroup)}
					/>
				))}
			</thead>
			<tbody {...getTableBodyProps()}>
				{rows.map(row => {
					prepareRow(row);
					return <TableRow key={rows.indexOf(row)} row={row} />;
				})}
			</tbody>
		</TableWrapper>
	);
};

const TableRow = ({ row }) => (
	<tr {...row.getRowProps()}>
		{row.cells.map(cell => {
			return (
				<td key={row.cells.indexOf(cell)} {...cell.getCellProps()}>
					{cell.render('Cell')}
				</td>
			);
		})}
	</tr>
);

const TableColumn = ({ headerGroup }) => (
	<tr {...headerGroup.getHeaderGroupProps()}>
		{headerGroup.headers.map(column => (
			<th
				key={headerGroup.headers.indexOf(column)}
				{...column.getHeaderProps(column.getSortByToggleProps())}
			>
				{column.render('Header')}

				<span>
					<SortIcon
						sorted={Boolean(FiMinus)}
						descending={Boolean(column.isSortedDesc)}
					/>
				</span>
			</th>
		))}
	</tr>
);

const SortIcon = ({ sorted, descending }) => {
	if (!sorted) return <FiMinus />;
	return descending ? <FiChevronDown /> : <FiChevronUp />;
};

SortIcon.propTypes = {
	sorted: PropTypes.bool.isRequired,
	descending: PropTypes.bool.isRequired,
};

TableColumn.propTypes = {
	headerGroup: PropTypes.object.isRequired,
};

TableRow.propTypes = {
	row: PropTypes.object.isRequired,
};

Table.propTypes = {
	data: PropTypes.arrayOf(PropTypes.object).isRequired,
	columns: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Table;
