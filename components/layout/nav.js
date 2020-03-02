import React from 'react';
import styled from 'styled-components';
import Icon from 'components/ui/icon';
import Link from 'next/link';

import { FiSettings } from 'react-icons/fi';

import { useRouter } from 'next/router';

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
			color: rgba(255, 255, 255, 0.9);
			text-decoration-color: rgba(255, 255, 255, 0.9);
		}
		li.active a {
			color: white;
			filter: drop-shadow(0px 0px 3px rgba(34, 255, 143, 0.69));
		}
		li.active:hover a {
			text-decoration-color: white;
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
`;

const Username = styled.h2`
	margin-top: 0.2rem;
	font-size: 1rem;
	margin-right: 0.2rem;
`;

const Nav = () => {
	const router = useRouter();
	return (
		<NavWrapper>
			<Link href="/">
				<a>
					<h1>FantasyMarket</h1>
				</a>
			</Link>

			<ul>
				<li className={router?.pathname.startsWith('/dashboard') || undefined}>
					<Link href="/dashboard">
						<a>dashboard</a>
					</Link>
				</li>
				<li className={router?.pathname.startsWith('/stocks') || undefined}>
					<Link href="/stocks">
						<a>stocks</a>
					</Link>
				</li>
				<li className={router?.pathname.startsWith('/portfolio') || undefined}>
					<Link href="/portfolio">
						<a>portfolio</a>
					</Link>
				</li>
				<li className={router?.pathname.startsWith('/portfolio') || undefined}>
					<Link href="/portfolio">
						<a>orders</a>
					</Link>
				</li>
				<li className={router?.pathname.startsWith('/help') || undefined}>
					<Link href="/portfolio">
						<a>help</a>
					</Link>
				</li>
			</ul>

			<div>
				<Username>Guest 123124234</Username>

				<Link href="/settings">
					<a>
						<Icon>
							<FiSettings />
						</Icon>
					</a>
				</Link>
			</div>
		</NavWrapper>
	);
};

Nav.propTypes = {};

export default Nav;
