import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Nav from './nav';
import Footer from './footer';

const Wrapper = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
`;
const Main = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	padding: 0.5rem 1rem;

	margin: 0 auto;
	width: 80rem;
	max-width: 100%;
`;

const Layout = ({ children, ...rest }) => {
	return (
		<Wrapper>
			<Nav />
			<Main {...rest}>{children}</Main>
			<Footer />
		</Wrapper>
	);
};

Layout.propTypes = {
	children: PropTypes.any.isRequired,
};

export default Layout;
