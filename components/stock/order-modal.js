import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { useForm, Controller } from 'react-hook-form';

import { Modal, ModalActions } from 'components/modal';
import Button from 'components/ui/button';
import Tab from 'components/ui/tab';

const OrderWrapper = styled(Modal)``;

const Order = ({ active, onToggle, stock }) => {
	// TODO: const api = useAPI();

	const { handleSubmit, watch, control, errors } = useForm();
	const onSubmit = values => console.log(values);

	const watchType = watch('type', 'market');
	const watchSide = watch('side', 'buy');

	return (
		active && (
			<OrderWrapper active={active} onSubmit={handleSubmit(onSubmit)}>
				{stock.symbol}
				<Controller
					as={<Tab items={{ buy: 'BUY', sell: 'SELL' }} />}
					name="type"
					control={control}
					defaultValue="buy"
					rules={{ required: true }}
					onChange={value => value}
				/>
				Type: {watchType} {'\n'}
				Side: {watchSide} {'\n'}
				<ModalActions>
					{JSON.stringify(errors)}
					<Button disabled>create</Button>
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
