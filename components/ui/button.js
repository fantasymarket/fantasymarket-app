import styled, { css } from 'styled-components';

const Button = styled.button`
	padding: 0.5rem 0.5rem 0.4rem 0.5rem;
	background: #ffffff1c;
	border: 2px solid rgba(255, 255, 255, 0.32);
	color: white;
	cursor: pointer;

	transition: all 0.2s ease-in-out;
	&:hover {
		border: 2px solid rgba(255, 255, 255, 0.92);
	}

	${props =>
		props.primary &&
		css`
			border: 2px solid rgba(0, 236, 225, 0.57);
			background: rgba(0, 229, 255, 0.05);

			&:hover {
				border: 2px solid rgba(0, 236, 225, 0.9);
				background: rgba(0, 229, 255, 0.14);
			}
		`}
`;

export default Button;
