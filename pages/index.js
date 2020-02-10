import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	h1 {
		font-family: monospace;
	}
`;

const Home = () => {
	return (
		<Wrapper>
			<h1>Hello World</h1>
		</Wrapper>
	);
};

export default Home;
