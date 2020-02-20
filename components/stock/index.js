import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import StockChart from 'components/chart/stock';
import Button from 'components/ui/button';

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

	table {
		border-collapse: collapse;
		p {
			margin: 0.2rem 0;
			font-weight: 600;
		}
		td:last-of-type p {
			text-orientation: sideways;
			text-align: right;
			font-weight: 400;
		}
	}
`;
const Description = styled.div`
	display: flex;
	margin-top: 3rem;

	> div {
		flex: 1;
	}
`;

const Stock = ({ symbol }) => {
	return (
		<Wrapper>
			<ChartWrapper>
				<ChartTitle>
					<h1>Alphabet Inc. ({symbol})</h1>
					<h1>$11.54</h1>
					<h3>
						<span>
							<b>UP</b> $2.35 (3.89%)
						</span>{' '}
						Today
					</h3>
				</ChartTitle>
				<StyledStockChart />
				<Description>
					<div>
						<h1>News</h1>
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
				<br />
				<br />
				<br />
				<br />
				<br />
				<Button primary>BUY</Button>
				<Button>SELL</Button>

				<br />
				<h2>Stats</h2>
				<table>
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
								<p>$20 Mio</p>
							</td>
						</tr>
					</tbody>
				</table>
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
