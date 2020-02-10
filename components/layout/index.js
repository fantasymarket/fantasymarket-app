import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div``;
const Main = styled.div``;

const Layout = ({ children, ...rest }) => {
	return (
		<Wrapper>
			<Main {...rest}>{children}</Main>
		</Wrapper>
	);
};

Layout.propTypes = {
	children: PropTypes.any.isRequired,
};

export default Layout;
