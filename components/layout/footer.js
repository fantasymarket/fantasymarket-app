import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
	display: flex;
	box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
		0 2px 4px -1px rgba(0, 0, 0, 0.06);
	padding: 1rem;

	h3 {
		padding-top: 0.1rem;
		font-size: 1rem;
		font-weight: 400;
	}
`;

const Footer = () => {
	return (
		<FooterWrapper>
			<h3>&copy; FantasyMarket 2020</h3>
		</FooterWrapper>
	);
};

Footer.propTypes = {};

export default Footer;
