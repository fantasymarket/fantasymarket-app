import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import usePortal from 'react-useportal';

const ModalWrapper = styled.form`
	${props =>
		!props.active &&
		css`
			display: none;
		`}
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 100;
	background: rgba(0, 0, 0, 0.1);
	display: flex;
	align-items: center;
	justify-content: center;
	backdrop-filter: blur(4px);

	> div {
		min-height: 10rem;
		width: ${props => (props.width ? props.width : '30rem')};
		max-width: calc(100% - 2rem);
		padding: 1rem;

		border: 2px solid rgb(255, 255, 255);
		border-radius: 8px;
		backdrop-filter: blur(8px);
		background: rgba(255, 255, 255, 0.09);
	}
`;

const Modal = React.forwardRef(
	({ children, active, onClickOutside, width, onSubmit, ...rest }, ref) => {
		const { Portal } = usePortal();

		const handleSubmit = e => {
			e.preventDefault();
			onSubmit(e);
		};

		return (
			active && (
				<Portal>
					<ModalWrapper
						ref={ref}
						{...rest}
						active={active}
						onClick={e => e.target === e.currentTarget && onClickOutside()}
						onSubmit={handleSubmit}
					>
						<div>{children}</div>
					</ModalWrapper>
				</Portal>
			)
		);
	},
);

Modal.propTypes = {
	children: PropTypes.any.isRequired,
	onClickOutside: PropTypes.func,
	onSubmit: PropTypes.func,
	active: PropTypes.bool,
	width: PropTypes.string,
};

Modal.defaultProps = {
	width: undefined,
	active: true,
	onSubmit: () => {},
	onClickOutside: () => {},
};

const ModalActions = styled.div`
	display: flex;
	padding-top: 0.5rem;

	> div,
	> button {
		flex: 1;

		margin-right: 0.5rem;

		&:last-of-type {
			margin-right: 0;
		}
	}
`;

export { Modal, ModalActions };
