const formatMoney = value =>
	new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	}).format(parseFloat(value, 10) / 100);

export default formatMoney;
