import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import generateDateAxis from 'utils/date-axis';

import {
	VictoryChart,
	VictoryLine,
	VictoryZoomContainer,
	VictoryBrushContainer,
	VictoryAxis,
} from 'victory';

const StockChartWrapper = styled.div`
	svg > * {
		fill: white !important;
	}
	svg tspan {
		fill: white !important;
	}

	svg line {
		stroke: gray !important;
	}

	div:last-of-type {
		> svg tspan {
			fill: gray !important;
		}

		svg line {
			stroke: gray !important;
		}
	}
`;

const BasicStockComponent = ({ data }) => {
	const [selectedDomain, setSelectedDomain] = useState(null);
	const [zoomDomain, setZoomDomain] = useState(null);

	return (
		<StockChartWrapper>
			<VictoryChart
				width={600}
				height={350}
				scale={{ x: 'time' }}
				containerComponent={
					<VictoryZoomContainer
						responsive={false}
						zoomDimension="x"
						zoomDomain={zoomDomain}
						onZoomDomainChange={setZoomDomain}
					/>
				}
			>
				<VictoryLine
					style={{
						data: { stroke: '#00f100' },
					}}
					data={data}
				/>
			</VictoryChart>

			<VictoryChart
				padding={{ top: 0, left: 50, right: 50, bottom: 30 }}
				width={600}
				height={90}
				scale={{ x: 'time' }}
				containerComponent={
					<VictoryBrushContainer
						responsive={false}
						brushDimension="x"
						brushDomain={selectedDomain}
						onBrushDomainChange={setSelectedDomain}
					/>
				}
			>
				<VictoryAxis
					tickValues={generateDateAxis(data, 5)}
					tickFormat={x => new Date(x).getFullYear()}
					style={{
						axis: { color: 'white' },
						axisLabel: { color: 'white' },
					}}
				/>
				<VictoryLine
					style={{
						data: { stroke: '#00f100' },
					}}
					data={data}
				/>
			</VictoryChart>
		</StockChartWrapper>
	);
};

BasicStockComponent.propTypes = {
	data: PropTypes.array,
};
BasicStockComponent.defaultProps = {
	data: [
		{ x: new Date(2001, 1, 1), y: 365 },
		{ x: new Date(2005, 1, 1), y: 406 },
		{ x: new Date(2011, 1, 1), y: 426 },
		{ x: new Date(2015, 1, 1), y: 399 },
		{ x: new Date(2016, 1, 1), y: 386 },
		{ x: new Date(2019, 1, 1), y: 377 },
		{ x: new Date(2020, 1, 1), y: 389 },
		{ x: new Date(2024, 1, 1), y: 402 },
		{ x: new Date(2027, 1, 1), y: 421 },
		{ x: new Date(2028, 1, 1), y: 455 },
		{ x: new Date(2031, 1, 1), y: 470 },
		{ x: new Date(2033, 1, 1), y: 501 },
	],
};

export default BasicStockComponent;
