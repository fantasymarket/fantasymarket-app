import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	overflow-x: auto;

	> ul {
		display: flex;
		margin: 0;
		padding: 0;
		list-style: none;
		margin-bottom: 1rem;

		li {
			display: flex;
			flex-direction: column;
			width: 14rem;
			padding: 0.5rem;
			padding-left: 0;
			color: white;

			h1 {
				font-size: 1.3rem;
				display: table;
			}

			time {
				font-size: 1.1rem;
				margin-bottom: 0.4rem;
			}
		}
	}

	@media (max-width: 750px) {
		> ul li h1 {
			font-size: calc(0.7rem + 2vw);
		}
		> ul li time {
			font-size: calc(0.4rem + 2vw);
		}
	}
`;

const News = ({ news }) => {
	return (
		<Wrapper>
			<ul>
				<li>
					<time>6. September 2020</time>
					<h1>Presidential Election Looking good for the Liberal Candidate</h1>
				</li>
				<li>
					<time>20. April 2020</time>
					<h1>
						Deadly desease ravashes the country with 20 confirmed death - UK
					</h1>
				</li>
				<li>
					<time>21. Juli 2020</time>
					<h1>War threats between Canada and Alaska</h1>
				</li>
				<li>
					<time>20. May 2020</time>
					<h1>
						Increase travel as the first Olympic games in Hawaii are taking
						place
					</h1>
				</li>
				<li>
					<time>20. January 2017</time>
					<h1>Terror! As a horse runs around loose in a hospital</h1>
				</li>
			</ul>
		</Wrapper>
	);
};

News.propTypes = {
	news: PropTypes.array.isRequired,
};

export default News;
