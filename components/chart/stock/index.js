import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import useComponentSize from '@rehooks/component-size';

import mockGraph from 'utils/mock-graph';

const demoData = mockGraph(100);

const Wrapper = styled.div`
	flex: 1;
	align-self: normal;

	filter: drop-shadow(0px 0px 3px rgba(34, 255, 143, 0.69));
`;

const ChartComponent = ({ ...rest }) => {
	const wrapperRef = useRef();
	const chartRef = useRef();
	const [chart, setChart] = useState();
	const [loading, setLoading] = useState();

	let size = { width: 0, height: 0 };
	if (process.browser) {
		// This is possible since process.browser is a constant and will never change
		// eslint-disable-next-line react-hooks/rules-of-hooks
		size = useComponentSize(wrapperRef);
	}

	useEffect(() => {
		async function initChart() {
			setLoading(true);
			const { createChart } = await import('lightweight-charts');
			const chart = createChart(chartRef.current, {
				...size,
				layout: {
					backgroundColor: 'transparent',
					textColor: 'white',
					fontSize: 16,
					fontFamily: '"Space Grotesk", monospace',
				},
				grid: {
					vertLines: {
						color: 'rgba(70, 130, 180, 0.1)',
						style: 2,
						visible: false,
					},
					horzLines: {
						color: 'rgba(70, 130, 180, 0.1)',
						style: 1,
						visible: false,
					},
				},
				crosshair: {
					vertLine: {
						color: '#6A5ACD',
						width: 0.5,
						style: 1,
						visible: true,
						labelVisible: false,
					},
					horzLine: {
						color: '#6A5ACD',
						width: 0.5,
						style: 0,
						visible: true,
						labelVisible: true,
					},
					mode: 1,
				},
				priceScale: {
					position: 'right',
					mode: 1,
					autoScale: false,
					invertScale: false,
					alignLabels: false,
					borderVisible: true,
					borderColor: 'rgba(255, 255, 255, 0.11)',
					scaleMargins: {
						top: 0.1,
						bottom: 0.1,
					},
				},
				timeScale: {
					rightOffset: 0,
					barSpacing: 0,
					fixLeftEdge: false,
					lockVisibleTimeRangeOnResize: true,
					rightBarStaysOnScroll: false,
					borderVisible: true,
					borderColor: 'rgba(255, 255, 255, 0.11)',
					visible: true,
					timeVisible: true,
					secondsVisible: true,
				},
			});
			setChart(chart);
			const lineSeries = chart.addLineSeries({
				color: '#22ff8f',
			});
			lineSeries.setData(demoData);
			chart.timeScale().setVisibleRange({
				from: demoData[0].time,
				to: demoData[demoData.length - 1].time,
			});
		}

		if (process.browser && !chart && !loading && size.height !== 0) initChart();
		return () => {};
	}, [chart, loading, size]);

	useEffect(() => {
		if (!chart) return;
		chart.resize(size.width, size.height);
	}, [chart, size, size.width, size.height]);

	return (
		<Wrapper ref={wrapperRef} {...rest}>
			<div ref={chartRef} />
		</Wrapper>
	);
};

ChartComponent.propTypes = {};

export default ChartComponent;
