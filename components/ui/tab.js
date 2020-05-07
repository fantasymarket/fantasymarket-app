import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const TabWrapper = styled.div`
	display: flex;
	background: rgba(255, 255, 255, 0.11);
	border: 2px solid rgba(255, 255, 255, 0.32);
	border-radius: 6px;
	overflow: hidden;

	transition: all 0.2s ease-in-out;
	&:hover {
		border: 2px solid rgba(255, 255, 255, 0.92);
	}
`;

const TabButton = styled.button`
	cursor: pointer;
	padding: 0.5rem 0.5rem 0.4rem 0.5rem;
	background: none;
	border: none;
	color: white;
	outline: none;

	transition: all 0.3s ease-in-out;

	${props =>
		props.active &&
		css`
			background-color: ${props => props.activeBackground || 'white'};
			color: ${props => props.activeColor || 'black'};
		`}
`;

const Tab = ({ items, onChange, value }) => {
	return (
		<TabWrapper>
			{items.map(item => {
				console.log(value, item.value);
				return (
					<TabButton
						key={item.key}
						type="button"
						onClick={() => onChange(item.key)}
						active={value === item.key}
						activeBackground={item.activeBackground || undefined}
						activeColor={item.activeColor || undefined}
					>
						{item.value}
					</TabButton>
				);
			})}
		</TabWrapper>
	);
};

Tab.propTypes = {
	items: PropTypes.array.isRequired,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
};

export default Tab;
