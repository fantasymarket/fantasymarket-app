import styled from 'styled-components';

const Table = styled.table`
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

export default Table;
