import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { useForm, Controller } from 'react-hook-form';

import { Modal, ModalActions } from '@components/modal';
import Button from '@components/ui/button';
import Input from '@components/ui/input';
import Tab from '@components/ui/tab';

const OrderWrapper = styled(Modal)`
	> div {
		width: auto;
		> h1 {
			margin-bottom: 1rem;
			> span {
				font-weight: 200;
			}
		}
	}
`;

const Options = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	margin-bottom: 1rem;

	> div:first-of-type {
		margin-right: 0.8rem;
	}
	 {
	}
`;

const orderSide = [
	{
		key: 'buy',
		value: 'BUY',
		activeBackground: '#22ff8f',
		activeColor: 'black',
	},
	{
		key: 'sell',
		value: 'SELL',
		activeBackground: 'rgba(255, 0, 0, 0.8)',
		activeColor: 'white',
	},
];

const orderType = [
	{
		key: 'market',
		value: 'market',
	},
	{
		key: 'limit',
		value: 'limit',
	},
	{
		key: 'stop',
		value: 'stop',
	},
	{
		key: 'trailing-stop',
		value: 'trailing stop',
	},
];

const Order = ({ active, onToggle, stock }) => {
	const { handleSubmit, control, errors } = useForm();
	const onSubmit = values => console.log(values);

	return (
		active && (
			<OrderWrapper active={active} onSubmit={handleSubmit(onSubmit)}>
				<h1>
					{stock.name} <span>({stock.symbol})</span>
				</h1>
				<Options>
					<div>
						<h3>Side</h3>
						<Controller
							as={<Tab items={orderSide} />}
							name="side"
							control={control}
							rules={{ required: true }}
							defaultValue="buy"
							onChange={([value]) => value}
						/>
					</div>

					<div>
						<h3>Type</h3>
						<Controller
							as={<Tab items={orderType} />}
							name="type"
							control={control}
							rules={{ required: true }}
							defaultValue="market"
							onChange={([value]) => value}
						/>
					</div>
				</Options>
				<Input type="currency" label="Price per share" />
				<Input type="number" label="Shares" />
				<ModalActions>
					<Button primary disabled={Object.keys(errors).length !== 0}>
						Create
					</Button>
					<Button onClick={onToggle}>Cancel</Button>
				</ModalActions>
			</OrderWrapper>
		)
	);
};

Order.propTypes = {
	active: PropTypes.bool.isRequired,
	onToggle: PropTypes.func.isRequired,
	stock: PropTypes.object.isRequired,
};

export default Order;
