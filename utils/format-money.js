const formatMoney = (value, currency = 'USD', locale = 'en-US') =>
	new Intl.NumberFormat(locale, {
		style: 'currency',
		currency,
	}).format(parseFloat(value, 10) / 100);

export default formatMoney;
