import React from 'react';
import styled from 'styled-components';
import Layout from 'components/layout';
import Button from 'components/ui/button';
import Link from 'next/link';

const Wrapper = styled(Layout)`
	align-items: center;
	justify-content: center;
`;

const Home = () => {
	return (
		<Wrapper>
			<h1>FantasyMarket</h1>
			<br />
			<Link href="/landing-page">
				<a>
					<Button primary>GET STARTED</Button>
				</a>
			</Link>
		</Wrapper>
	);
};

export default Home;
