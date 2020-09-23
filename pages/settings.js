import React from 'react';
import styled from 'styled-components';
import Layout from '@components/layout';

import { observer } from 'mobx-react-lite';

import { useAPI } from '@api';
import Button from '@components/ui/button';
import Input from '@components/ui/input';
import { useRouter } from 'next/router';

const SettingsWrapper = styled(Layout)`
	max-width: 50rem;

	pre {
		color: white;
	}

	button {
		width: fit-content;
	}

	input {
		width: 20rem;
	}

	ul {
		padding: 0;
		list-style: none;
		li {
			margin: 0;
		}
	}
`;

const Inputs = styled.div`
	display: flex;
	align-items: center;

	input {
		margin-right: 1rem;
	}
`;

const Clear = styled.span`
	font-size: 1rem;
	font-weight: 200;
	text-decoration: underline;
	cursor: pointer;
`;

const Settings = () => {
	const api = useAPI();
	const router = useRouter();
	return (
		<SettingsWrapper>
			<h1>Welcome {api.user.user.username}!</h1>
			<br />
			<br />
			<h2>
				Past Accounts{' '}
				<Clear onClick={() => (api.user.pastUsernames = [])}>clear</Clear>
			</h2>
			<ul>
				{api.user.pastUsernames.length === 0 ? (
					<h3>No Past Accounts</h3>
				) : (
					api.user.pastUsernames.map(u => (
						<li key={u}>
							<h3>> {u}</h3>
						</li>
					))
				)}
			</ul>
			<br />
			<br />
			<h2>Account Actions</h2>
			<br />
			<h3>Log-out on this Device</h3>
			<p>Your Username will be saved so you can log back in late.</p>
			<Button onClick={() => api.user.logout().finally(() => router.push('/'))}>
				Logout
			</Button>
			<br />
			<br />

			<h3>Delete Your Account</h3>
			<p>Warning: this Action can't be reverted</p>
			<Button
				onClick={() => api.user.logout().finally(() => router.push('/'))}
				disabled
			>
				Delete Account
			</Button>
			<br />
			<br />

			<h3>Update Username/Claim Guest Account</h3>
			<Inputs>
				<Input placeholder="Your new Password" />
				<Button>Save</Button>
			</Inputs>
			<br />
			<br />

			<h3>Choose Password</h3>
			<p>
				New Guest Accounts aren't protected with a password. Please choose a new
				Username first.
			</p>
			<Inputs>
				<Input placeholder="Your new Password" />
				<Button>Save</Button>
			</Inputs>
		</SettingsWrapper>
	);
};

export default observer(Settings);
