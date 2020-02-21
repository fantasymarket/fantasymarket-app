import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const News = styled.div`
	div {
		display: flex;
		h1 {
			font-weight: 300;
			font-size: 1.7rem;
		}
		margin-right: auto;
		justify-content: space-between;
		align-items: flex-end;
	}
	p {
		margin: 0.2rem 0;
	}
`;
const NewsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-right: 2rem;
`;

const NewsStory = ({ title, content }) => {
	return (
		<News>
			<div>
				<h1>{title}</h1>
				<h2>21/02/20</h2>
			</div>
			<p>{content}</p>
		</News>
	);
};

const StockNews = ({ news }) => {
	return (
		<NewsWrapper>
			{news.map(newsStory => (
				<NewsStory key={news.indexOf(newsStory)} {...newsStory} />
			))}
		</NewsWrapper>
	);
};

NewsStory.propTypes = {
	title: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
};
StockNews.propTypes = { news: PropTypes.array.isRequired };

export default StockNews;
