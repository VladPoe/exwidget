export const getToCurrency = (fromCurrency, userCurrencies) => {
	const currencies = Object.keys(userCurrencies);
	const indexOfFromCurrency = currencies.indexOf(fromCurrency);
	const resultIndex = indexOfFromCurrency === currencies.length - 1 ? 0 : indexOfFromCurrency + 1;
	return currencies[resultIndex];
};

export const sumRegexp = /^$|(^\d{1,12}(\.\d{0,2})?$)/;