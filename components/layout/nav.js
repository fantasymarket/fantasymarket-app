import React from 'react';
import styled from 'styled-components';
import Button from 'components/ui/button';
import Link from 'next/link';

const NavWrapper = styled.div`
	display: flex;
	padding: 0.7rem 0.6rem 0.7rem 1rem;
	align-items: center;
	justify-content: space-between;

	h1 {
		color: white;
		padding-top: 0.1rem;
		font-size: 1.4rem;
		font-weight: 400;
		filter: drop-shadow(0px 0px 3px rgba(34, 255, 143, 0.69));
	}

	> div {
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
	margin-right: 1rem;
`;

const Nav = () => {
	return (
		<NavWrapper>
			<Link href="/">
				<a>
					<h1>FantasyMarket</h1>
				</a>
			</Link>

			<div>
				<Username>Guest 123124234</Username>
				<Button>Settings</Button>
			</div>
		</NavWrapper>
	);
};

Nav.propTypes = {};

export default Nav;
