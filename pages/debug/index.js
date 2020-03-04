import React from 'react';
import styled from 'styled-components';
import Layout from 'components/layout';

import BasicStockComponent from 'components/chart/stock-minimal';
import Chart from 'components/chart/stock';

const Wrapper = styled(Layout)`
	align-items: center;
	justify-content: center;
`;

const Debug = () => {
	return (
		<Wrapper>
			<BasicStockComponent />
			<Chart />
		</Wrapper>
	);
};

export default Debug;
