import React from 'react';
import styled from 'styled-components';
import Layout from 'components/layout';
import Button from 'components/ui/button';
import Link from 'next/link';

const Wrapper = styled(Layout)`
	align-items: center;
	justify-content: center;

	h1 {
		font-size: 4rem;
		filter: drop-shadow(0px 0px 3px rgba(34, 255, 143, 0.19));
		background-image: linear-gradient(90deg, #00ffff, #00ff67);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	h2 {
		font-size: 2rem;
		filter: drop-shadow(0px 0px 3px rgba(34, 255, 143, 0.39));
	}

	button {
		font-size: 1.5rem;
		padding: 0.8rem 0.8rem 0.4rem 0.8rem;
	}

	> div > button:first-of-type {
		margin-right: 0.8rem;
	}
`;

const Home = () => {
	return (
		<Wrapper>
			<h1>FantasyMarket</h1>
			<h2>YOUR road to success in the stock market!</h2>
			<br />
			<br />
			<br />
			<div>
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
				<Link href="/stock?symbol=GOOG">
					<a>
						<Button>Demo</Button>
					</a>
				</Link>
			</div>
		</Wrapper>
	);
};

export default Home;
