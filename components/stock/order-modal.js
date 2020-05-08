import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { useForm, Controller } from 'react-hook-form';

import { Modal, ModalActions } from 'components/modal';
import Button from 'components/ui/button';
import Tab from 'components/ui/tab';

const OrderWrapper = styled(Modal)`
	> div > h1 {
		margin-bottom: 1rem;
	}
`;

const Option = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
`;

const Order = ({ active, onToggle, stock }) => {
	const { handleSubmit, watch, control, errors } = useForm();
	const onSubmit = values => console.log(values);

	const watchType = watch('type', 'market');
	const watchSide = watch('side', 'buy');

	return (
		active && (
			<OrderWrapper active={active} onSubmit={handleSubmit(onSubmit)}>
				<h1>
					{stock.name} ({stock.symbol})
				</h1>
				<Option>
					<h2>Side</h2>
					<Controller
						as={
							<Tab
								items={[
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
								]}
							/>
						}
						name="side"
						control={control}
						rules={{ required: true }}
						defaultValue="buy"
						onChange={([value]) => value}
					/>
				</Option>
				<br />
				<h3>
					Type: {watchType} {'\n'}
				</h3>
				<h3>
					Side: {watchSide} {'\n'}
				</h3>
				<ModalActions>
					<Button disabled={Object.keys(errors).length !== 0}>Create</Button>
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
