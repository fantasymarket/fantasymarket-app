import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import News from './news';

const DescriptionWrapper = styled.div`
	display: flex;
	margin-top: 3rem;

	> div {
		flex: 1;
	}

	@media (max-width: 750px) {
		flex-wrap: wrap;
	}
`;

const Description = ({ news, about }) => (
	<DescriptionWrapper>
		<div>
			<h1>News</h1>
			<News news={news} />
		</div>
		<div>
			<h1>About</h1>
			<div>
				<p>{about}</p>
			</div>
		</div>
	</DescriptionWrapper>
);

Description.propTypes = {
	news: PropTypes.array.isRequired,
	about: PropTypes.string.isRequired,
};

export default Description;
