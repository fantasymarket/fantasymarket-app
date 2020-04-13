import React from 'react';
import styled from 'styled-components';
import Icon from 'components/ui/icon';
import Link from 'next/link';

import { observer } from 'mobx-react-lite';

import { FiSettings } from 'react-icons/fi';

import { useRouter } from 'next/router';
import { useAPI } from 'api';

import Button from 'components/ui/button';

const NavWrapper = styled.div`
	display: flex;
	padding: 1.7rem 1.2rem 0.7rem 1.3rem;
	margin-bottom: 1rem;
	align-items: center;

	h1 {
		color: white;
		padding-top: 0.1rem;
		font-size: 1.4rem;
		font-weight: 400;
		filter: drop-shadow(0px 0px 3px rgba(34, 255, 143, 0.69));
	}

	> ul {
		display: flex;
		list-style: none;
		padding: 0;
		margin: 0.2rem 0 0 1rem;

		li a {
			text-decoration: underline;
			text-decoration-color: transparent;

			transition: all 0.2s ease-in-out;
			margin: 0 0.3rem;
			color: rgba(255, 255, 255, 0.77);
		}
		li:not(.active):hover a {
			filter: drop-shadow(0px 0px 3px rgba(34, 255, 143, 0.69));

			color: rgba(255, 255, 255, 0.9);
			/* text-decoration-color: rgba(255, 255, 255, 0.9); */
		}
		li.active a {
			font-weight: 600;
			color: white;
			filter: drop-shadow(0px 0px 3px rgba(34, 255, 143, 0.69));
		}
		li.active:hover a {
			/* text-decoration-color: white; */
		}
		li.settings-btn {
			display: none;
		}
	}

	> div {
		margin-left: auto;
		display: flex;
		align-items: center;
	}

	> div > button:first-of-type {
		margin-right: 0.5rem;
	}

	@media (max-width: 750px) {
		padding: 1.4rem 1rem 0 1rem;
		flex-wrap: wrap;
		justify-content: center;
		margin-bottom: 0;

		> h1 {
		}

		> div {
			order: 2;

			margin-left: 0.5rem;
			.settings-btn {
				display: none;
			}
		}

		> ul {
			margin: 0;
			overflow-x: auto;
			padding: 1rem;
			width: 100%;
			justify-content: center;
			order: 3;
			li.settings-btn {
				display: block;
			}
		}
	}
`;

const Username = styled.h2`
	margin-top: 0.2rem;
	font-size: 1rem;
	margin-right: 0.2rem;
`;

const Nav = () => {
	const router = useRouter();
	const api = useAPI();

	return (
		<NavWrapper>
			<Link href="/">
				<a>
					<h1>FantasyMarket</h1>
				</a>
			</Link>

			<ul>
				<li
					className={
						router?.pathname?.startsWith?.('/dashboard') ? 'active' : undefined
					}
				>
					<Link href="/dashboard">
						<a>dashboard</a>
					</Link>
				</li>
				{/* <li className={router?.pathname?.startsWith?.('/stocks') ? 'active'}:undefined>
					<Link href="/stocks">
						<a>stocks</a>
					</Link>
				</li> */}
				<li
					className={
						router?.pathname?.startsWith?.('/portfolio') ? 'active' : undefined
					}
				>
					<Link href="/portfolio">
						<a>portfolio</a>
					</Link>
				</li>
				<li
					className={
						router?.pathname?.startsWith?.('/portfolio') ? 'active' : undefined
					}
				>
					<Link href="/orders">
						<a>orders</a>
					</Link>
				</li>
				<li
					className={
						router?.pathname?.startsWith?.('/help') ? 'active' : undefined
					}
				>
					<Link href="/help">
						<a>help</a>
					</Link>
				</li>
				<li
					className={
						(router?.pathname?.startsWith?.('/settings')
							? 'active'
							: undefined) + ' settings-btn'
					}
				>
					<Link href="/settings">
						<a>settings</a>
					</Link>
				</li>
			</ul>

			<div>
				{api?.user?.authenticated ? (
					<>
						<Username>{api?.user?.user?.username}</Username>

						<Link href="/settings">
							<a className="settings-btn">
								<Icon>
									<FiSettings />
								</Icon>
							</a>
						</Link>
					</>
				) : (
					<Link href="/settings">
						<a className="settings-btn">
							<Button>Login</Button>
						</a>
					</Link>
				)}
			</div>
		</NavWrapper>
	);
};

Nav.propTypes = {};

export default observer(Nav);
