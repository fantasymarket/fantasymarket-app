import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Modal, ModalActions } from '@components/modal';
import Button from '@components/ui/button';
import Input from '@components/ui/input';
import { useAPI } from '@api';

import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/router';

const LoginWrapper = styled(Modal)`
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

const LoginModal = ({ active, onToggle }) => {
	const api = useAPI();
	const router = useRouter();
	const [waiting, setWaiting] = useState(false);

	const createAccount = () => {
		setWaiting(true);
		api.user
			.create()
			.then(() => {
				setWaiting(false);
				onToggle();
				router.push('/');
			})
			.catch(error => setWaiting(error));
	};

	if (!active) {
		return null;
	}

	return (
		<LoginWrapper active={active}>
			<h1>
				Welcome to <span>FantasyMarket</span>!
			</h1>
			{waiting === false && (
				<>
					<Options>
						<div>
							<h3>Username</h3>
							<Input placeholder="Your Username" />
						</div>
						<div>
							<h3>
								Password (<span>Leave empty for guest accounts</span>)
								<Input placeholder="Your Password (Optional)" />
							</h3>
						</div>
					</Options>
					{api.user.pastUsernames.length !== 0 && (
						<p>(Your past usernames: {api.user.pastUsernames.join(', ')})</p>
					)}
					<ModalActions>
						<Button primary>Login</Button>
						<Button onClick={createAccount}>Create Guest Account</Button>
						<Button onClick={onToggle}>Cancel</Button>
					</ModalActions>
				</>
			)}
			{waiting === true && <h2>Creating new account...</h2>}
			{waiting !== false && waiting !== true && <h2>An Error occured :(...</h2>}
		</LoginWrapper>
	);
};

LoginModal.propTypes = {
	active: PropTypes.bool.isRequired,
	onToggle: PropTypes.func.isRequired,
};

export default observer(LoginModal);
