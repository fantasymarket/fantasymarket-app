import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import StockChart from 'components/chart/stock';
import Button from 'components/ui/button';

import News from './news';

const Wrapper = styled.div`
	display: flex;
	margin-top: 3rem;
`;

const ChartWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-right: 2rem;
`;

const StyledStockChart = styled(StockChart)`
	height: 40vh;
	min-height: 30rem;
`;

const ChartTitle = styled.div`
	h1 {
		&:last-of-type {
			font-weight: 400;
		}
	}

	h3 {
		span {
			color: #22ff8f;
		}
		b {
			background-color: #22ff8f;
			color: black;
			padding: 0.2rem 0.2rem 0 0.2rem;
			border-radius: 4px;
		}
	}
`;
const SidebarWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 20rem;

	button {
		margin-bottom: 0.5rem;
	}
`;

const Stats = styled.table`
	border-collapse: collapse;
	p {
		margin: 0.2rem 0;
		font-weight: 600;
	}
	td {
		height: 2rem;
	}
	td:first-of-type p {
		font-weight: 300;
	}
	td:last-of-type p {
		text-align: right;
		font-weight: 400;
	}
`;

const Description = styled.div`
	display: flex;
	margin-top: 3rem;

	> div {
		flex: 1;
	}
`;

const Performance = styled.div`
	button {
		width: 100%;
	}

	h1 {
		margin-bottom: 1rem;
		font-size: 1.4rem;

		b {
			color: black;
			padding: 0.2rem 0.2rem 0 0.2rem;
			border-radius: 4px;
		}

		span b {
			font-size: 1.1rem;
			margin-bottom: 0.5rem;
		}

		span.down {
			color: #ff2255;
		}
		span.up {
			color: #22ff8f;
		}
		p.left {
			text-align: left;
		}

		table {
			border-collapse: collapse;
			p {
				margin: 0.2rem 0;
				font-weight: 600;
			}
			td:last-of-type p {
				margin-left: 1rem;
				text-align: left;
				font-weight: 400;
			}
		}
	}
	h2.price {
		font-size: 1.8rem;
		span {
			color: white;
		}
	}
	h2 {
		font-size: 1.2rem;
	}
`;

const Stock = ({ symbol }) => {
	return (
		<Wrapper>
			<ChartWrapper>
				<ChartTitle>
					<h1>Alphabet Inc. ({symbol})</h1>
					<h1>$1029.27</h1>
					<h3>
						<span className="down">
							<b>DOWN</b> -$3.24 (-0.31%)
						</span>{' '}
						Today
					</h3>
				</ChartTitle>
				<StyledStockChart />
				<Description>
					<div>
						<h1>News</h1>
						<News
							news={[
								{
									title: 'Google did an oopsie',
									content: 'Big oof',
								},
							]}
						/>
					</div>
					<div>
						<h1>About</h1>
						<div>
							<p>
								<b>Alphabet Inc.</b> is an American multinational{' '}
								<a
									href="/wiki/Conglomerate_(company)"
									title="Conglomerate (company)"
								>
									conglomerate
								</a>{' '}
								headquartered in{' '}
								<a
									href="/wiki/Mountain_View,_California"
									title="Mountain View, California"
								>
									Mountain View, California
								</a>
								. It was created through a{' '}
								<a href="/wiki/Restructuring" title="Restructuring">
									corporate restructuring
								</a>{' '}
								of Google on October 2, 2015, and became the parent company of
								Google and several former Google{' '}
								<a href="/wiki/Subsidiary" title="Subsidiary">
									subsidiaries
								</a>
								. The two founders of Google assumed executive roles in the new
								company, with{' '}
								<a href="/wiki/Larry_Page" title="Larry Page">
									Larry Page
								</a>{' '}
								serving as CEO and{' '}
								<a href="/wiki/Sergey_Brin" title="Sergey Brin">
									Sergey Brin
								</a>{' '}
								as president. Alphabet is the{' '}
								<a
									href="/wiki/List_of_the_largest_information_technology_companies"
									className="mw-redirect"
									title="List of the largest information technology companies"
								>
									world's fourth-largest technology company
								</a>{' '}
								by revenue and one of the{' '}
								<a
									href="/wiki/List_of_public_corporations_by_market_capitalization"
									title="List of public corporations by market capitalization"
								>
									world's most valuable companies
								</a>
								.
							</p>
						</div>
					</div>
				</Description>
			</ChartWrapper>
			<SidebarWrapper>
				<Performance>
					<Button primary>TRADE</Button>
					<br />
					<br />
					<h2 className="price">Change</h2>
					<h1>
						<table>
							<tbody>
								<tr>
									<td>
										<p>1h</p>
									</td>
									<td>
										<p>
											<span className="up">+2.2%</span>
										</p>
									</td>
								</tr>
								<tr>
									<td>
										<p>24h</p>
									</td>
									<td>
										<p>
											<span className="up">+9.1%</span>
										</p>
									</td>
								</tr>
								<tr>
									<td>
										<p>7d</p>
									</td>
									<td>
										<p>
											<span className="down">-10.1%</span>
										</p>
									</td>
								</tr>
							</tbody>
						</table>
					</h1>

					<h2>Shares Owned</h2>
					<h1>46 Shares</h1>

					<h2>Average Cost</h2>
					<h1>$800</h1>

					<h2>Total Cost</h2>
					<h1>$36,800</h1>
				</Performance>
				<br />
				<h2>Stats</h2>
				<Stats>
					<tbody>
						<tr>
							<td>
								<p>Market Cap</p>
							</td>
							<td>
								<p>$900 Mio</p>
							</td>
						</tr>
						<tr>
							<td>
								<p>Volume (24h)</p>
							</td>
							<td>
								<p>582,709</p>
							</td>
						</tr>
						<tr>
							<td>
								<p>Previous Close </p>
							</td>
							<td>
								<p>$1,518.15</p>
							</td>
						</tr>
						<tr>
							<td>
								<p>Open </p>
							</td>
							<td>
								<p>$1,518.15</p>
							</td>
						</tr>
						<tr>
							<td>
								<p>1y Target Est </p>
							</td>
							<td>
								<p>$1,616.37</p>
							</td>
						</tr>
						<tr>
							<td>
								<p>Day's Range</p>
							</td>
							<td>
								<p>
									$1,498.39
									<br />- $1,512.21
								</p>
							</td>
						</tr>
						<tr>
							<td>
								<p>52 Week Range</p>
							</td>
							<td>
								<p>
									$1,025.00
									<br />- $1,532.11
								</p>
							</td>
						</tr>
					</tbody>
				</Stats>
			</SidebarWrapper>
		</Wrapper>
	);
};

Stock.propTypes = {
	symbol: PropTypes.string,
};

Stock.defaultProps = {
	symbol: 'GOOG',
};

export default Stock;
