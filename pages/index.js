import React from 'react';
import styled from 'styled-components';
import Layout from 'components/layout';
import Button from 'components/ui/button';
import Link from 'next/link';

const Wrapper = styled(Layout)`
	align-items: center;
	justify-content: center;

	h1,
	h2 span {
		filter: drop-shadow(0px 0px 3px rgba(34, 255, 143, 0.19));
		background-image: linear-gradient(90deg, #00ffff, #00ff67);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	h1 {
		font-size: 4rem;
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
			<h2>
				<span>YOUR</span> road to success in the stock market!
			</h2>
			<h2>
				No signup required, start learning <span>RIGHT AWAY</span>!
			</h2>
			<br />
			<br />
			<br />
			<div>
				<Link href="/dashboard">
					<Button primary>Let's GO</Button>
				</Link>

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
