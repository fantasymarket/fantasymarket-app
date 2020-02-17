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
			<Button
				primary
				onClick={() => {
					global.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
					global.location.replace(
						'https://www.youtube.com/watch?v=6n3pFFPSlW4',
					);
				}}
			>
				GET STARTED
			</Button>
		</Wrapper>
	);
};

export default Home;
