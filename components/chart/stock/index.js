import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import useComponentSize from '@rehooks/component-size';

import mockGraph from '@utils/mock-graph';
import { defaultChartSettings } from './settings';

const Wrapper = styled.div`
	height: 40vh;
	min-height: 30rem;

	@media (max-width: 750px) {
		height: 30vh;
		min-height: 10rem;
	}

	flex: 1;
	align-self: normal;

	filter: drop-shadow(0px 0px 3px rgba(34, 255, 143, 0.69));
`;

const ChartComponent = ({ chartSettings, data, ...rest }) => {
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
				...defaultChartSettings,
				...chartSettings,
			});
			setChart(chart);

			const lineSeries = chart.addLineSeries({
				color: '#22ff8f',
			});
			lineSeries.setData(data);

			chart.timeScale().setVisibleRange({
				from: data[0].time,
				to: data[data.length - 1].time,
			});
		}

		if (process.browser && !chart && !loading /* && size.height !== 0 */)
			initChart();
		return () => {};
	}, [chart, loading, size, chartSettings, data]);

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

ChartComponent.propTypes = {
	chartSettings: PropTypes.object,
	data: PropTypes.array,
};
ChartComponent.defaultProps = {
	chartSettings: {},
	data: mockGraph(100),
};

export default ChartComponent;
