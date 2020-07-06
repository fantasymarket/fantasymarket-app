export const defaultChartSettings = {
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
};
