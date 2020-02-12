import React from 'react';
import styled from 'styled-components';
import Button from 'components/ui/button';

const NavWrapper = styled.div`
	display: flex;
	box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
		0 2px 4px -1px rgba(0, 0, 0, 0.06);
	padding: 0.7rem 0.6rem 0.7rem 1rem;
	background-color: #212121;
	align-items: center;
	justify-content: space-between;

	h1 {
		color: white;
		padding-top: 0.1rem;
		font-size: 1.4rem;
		font-weight: 400;
	}

	> div > button:first-of-type {
		margin-right: 0.5rem;
	}
`;

const Nav = () => {
	return (
		<NavWrapper>
			<h1>FantasyMarket</h1>
			<div>
				<Button>signup</Button>
				<Button>login</Button>
			</div>
		</NavWrapper>
	);
};

Nav.propTypes = {};

export default Nav;
