import React from 'react';
import styled from 'styled-components';
import Layout from '@components/layout';

const HelpWrapper = styled(Layout)`
	max-width: 50rem;
	justify-content: center;

	p {
		font-size: 1.2rem;
	}
`;

const Help = () => {
	return (
		<HelpWrapper>
			<h1>Learning Resources</h1>
			<p>
				Welcome to FantasyMarket! We are still working hard on releasing the
				full website, so expect learning resources to be availabe in the coming
				Weeks!
			</p>
			<p>
				Until then, some information about us: <br />
				<br />
				We are creating a working stock market simulation, where the user can
				invest in-game currency in a simulated market completely separated from
				the real world. By providing custom events that pop up randomly and
				alter the course of our stocks, coupled with a market that never sleeps,
				we are presenting a fun and fast-paced introduction into the stock
				market. Our beta is currently in its final phase and we plan to release
				it fully by the end of august.
			</p>
			<p>
				You can contact us at{' '}
				<a href="maito:fantasymarket@explodingcamera.com">
					fantasymarket@explodingcamera.com
				</a>
			</p>
		</HelpWrapper>
	);
};

export default Help;
