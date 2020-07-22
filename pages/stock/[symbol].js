import React from 'react';
import styled from 'styled-components';
import Layout from '@components/layout';
import { useRouter } from 'next/router';

import Stock from '@components/stock';

const Wrapper = styled(Layout)``;

const StockPage = () => {
	const router = useRouter();

	return (
		<Wrapper>
			<Stock symbol={router.query.symbol} />
		</Wrapper>
	);
};

export default StockPage;
