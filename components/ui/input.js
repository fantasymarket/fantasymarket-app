import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputWrapper = styled.div`
	margin: 0.5rem 0;
	display: flex;
	flex-direction: column;

	input {
		color: white;
		background: none;
		border: 2px solid rgba(255, 255, 255, 0.85);
		padding: 0.5rem;
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

	label {
		color: white;
		padding: 0.3rem 0;
	}
`;

const Input = ({ label, ...rest }) => {
	return (
		<InputWrapper>
			{label && <label>{label}</label>}
			<input {...rest} />
		</InputWrapper>
	);
};

Input.propTypes = {
	label: PropTypes.any,
};

Input.defaultProps = {
	label: undefined,
};

export default Input;
