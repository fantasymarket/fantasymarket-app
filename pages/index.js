import React from 'react';
import styled from 'styled-components';
import Layout from 'components/layout';
import Button from 'components/ui/button';

const Wrapper = styled(Layout)`
	align-items: center;
	justify-content: center;
`;

const Home = () => {
	return (
		<Wrapper>
			<h1>FantasyMarket</h1>
			<br />
			<Button primary>GET STARTED</Button>
		</Wrapper>
	);
};

export default Home;
