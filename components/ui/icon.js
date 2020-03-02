import styled from 'styled-components';

const Icon = styled.div`
	display: flex;

	svg {
		color: ${props => props.color || 'white'};
		width: 1.5rem;
		height: 1.5rem;
		padding: 0.1rem;
		margin: 0 0.5rem;
	}
`;

export default Icon;
