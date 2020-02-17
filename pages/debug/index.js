import React from 'react';
import styled from 'styled-components';
import Layout from 'components/layout';

import BasicStockComponent from 'components/charts/stocks-basic';

const Wrapper = styled(Layout)`
	align-items: center;
	justify-content: center;
`;

const Debug = () => {
	return (
		<Wrapper>
			<BasicStockComponent />
		</Wrapper>
	);
};

export default Debug;
