import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import useComponentSize from '@rehooks/component-size';

const demoData = [
	{ time: '2019-04-11', value: 80.01 },
	{ time: '2019-04-12', value: 96.63 },
	{ time: '2019-04-13', value: 76.64 },
	{ time: '2019-04-14', value: 81.89 },
	{ time: '2019-04-15', value: 74.43 },
	{ time: '2019-04-16', value: 80.01 },
	{ time: '2019-04-17', value: 96.63 },
	{ time: '2019-04-18', value: 76.64 },
	{ time: '2019-04-19', value: 81.89 },
	{ time: '2019-04-20', value: 74.43 },

	{ time: '2019-05-11', value: 180.01 },
	{ time: '2019-05-12', value: 196.63 },
	{ time: '2019-05-13', value: 176.64 },
	{ time: '2019-05-14', value: 181.89 },
	{ time: '2019-05-15', value: 174.43 },
	{ time: '2019-05-16', value: 180.01 },
	{ time: '2019-05-17', value: 196.63 },
	{ time: '2019-05-18', value: 176.64 },
	{ time: '2019-05-19', value: 181.89 },
	{ time: '2019-05-20', value: 174.43 },

	{ time: '2019-06-11', value: 280.01 },
	{ time: '2019-06-12', value: 296.63 },
	{ time: '2019-06-13', value: 276.64 },
	{ time: '2019-06-14', value: 281.89 },
	{ time: '2019-06-15', value: 274.43 },
	{ time: '2019-06-16', value: 280.01 },
	{ time: '2019-06-17', value: 296.63 },
	{ time: '2019-06-18', value: 276.64 },
	{ time: '2019-06-19', value: 281.89 },
	{ time: '2019-06-20', value: 274.43 },

	{ time: '2019-07-11', value: 180.01 },
	{ time: '2019-07-12', value: 196.63 },
	{ time: '2019-07-13', value: 176.64 },
	{ time: '2019-07-14', value: 181.89 },
	{ time: '2019-07-15', value: 174.43 },
	{ time: '2019-07-16', value: 180.01 },
	{ time: '2019-07-17', value: 196.63 },
	{ time: '2019-07-18', value: 176.64 },
	{ time: '2019-07-19', value: 181.89 },
	{ time: '2019-07-20', value: 174.43 },
];

const Wrapper = styled.div`
	flex: 1;
	align-self: normal;

	filter: drop-shadow(0px 0px 3px rgba(34, 255, 143, 0.69));
`;

const ChartComponent = () => {
	const wrapperRef = useRef();
	const chartRef = useRef();
	const [chart, setChart] = useState();
	const [loading, setLoading] = useState();

	const size = useComponentSize(wrapperRef);

	useEffect(() => {
		async function initChart() {
			setLoading(true);
			console.log(size);
			const { createChart } = await import('lightweight-charts');
			const chart = createChart(chartRef.current, {
				width: 100,
				height: 100,
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
		chart.resize(size.height, size.width);
		console.log(size);
	}, [chart, size, size.height, size.width]);

	return (
		<Wrapper ref={wrapperRef}>
			<div ref={chartRef} />
		</Wrapper>
	);
};

ChartComponent.propTypes = {};

export default ChartComponent;
