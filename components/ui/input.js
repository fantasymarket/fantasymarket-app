import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import CurrencyInput from 'react-currency-masked-input';

const InputWrapper = styled.div`
	margin: 0.5rem 0;

	label {
		color: white;
		padding: 0.3rem 0;
	}

	> div {
		display: flex;
		flex-direction: column;
		position: relative;
	}

	input {
		color: white;
		background: none;
		border: 2px solid rgba(255, 255, 255, 0.85);

		padding: 0.5rem;
		padding-top: 0.6rem;

		outline: none;
		border-radius: 6px;

		transition: border 0.2s ease-in-out;
		&:focus {
			border: 2px solid #28f3f3;
		}
		&:invalid {
			border: 2px solid red;
		}
	}

	${props =>
		props.type === 'currency' &&
		css`
			input {
				padding-left: 1.6rem;
			}

			> div::before {
				content: '$';
				position: absolute;
				bottom: 0;
				top: calc(50% + 0.04rem);
				transform: translateY(-50%);
				left: 0.7rem;
				color: #22ff8f;
				text-shadow: 1px 1px 6px black;
			}
		`}
`;

const Input = ({ label, type, ...rest }) => {
	let input;
	switch (type) {
		case 'currency':
			input = <CurrencyInput type="number" {...rest} />;
			break;
		default:
			input = <input type={type} {...rest} />;
			break;
	}

	return (
		<InputWrapper type={type}>
			{label && <label>{label}</label>}
			<div>{input}</div>
		</InputWrapper>
	);
};

Input.propTypes = {
	label: PropTypes.any,
	type: PropTypes.string,
};

Input.defaultProps = {
	label: undefined,
	type: 'text',
};

export default Input;
