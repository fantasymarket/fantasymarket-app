import React from 'react';
import styled from 'styled-components';
import Layout from '@components/layout';
import { useRouter } from 'next/router';

import useSWR from 'swr';
import { useAPI } from '@api';
import Stock from '@components/stock';

const Wrapper = styled(Layout)``;
const Loading = styled.h2`
	font-weight: 300;
	margin-top: 1rem;
	color: rgba(255, 255, 255, 0.8);
	font-size: 1rem;
`;

const StockPage = () => {
	const router = useRouter();
	const api = useAPI();

	const { data } = useSWR(router.query.symbol, symbol =>
		api.transport.assets.history({ symbol }),
	);

	const { data: time } = useSWR('time', () => api.transport.game.time());

	return (
		<Wrapper>
			{!data && <Loading>Loading ...</Loading>}
			{data && <Stock {...data} time={time} />}
		</Wrapper>
	);
};

export default StockPage;
