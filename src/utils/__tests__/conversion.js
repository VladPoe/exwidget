import { convertFromTo, combRates } from "./../conversion";

it('convertFromTo test', () => {
  expect(
    convertFromTo(1)(0.8327)
  ).toEqual('1.20');

  expect(
    convertFromTo(1)(0.8324)
  ).toEqual('1.20');

  expect(
    convertFromTo(1)(2.543)
  ).toEqual('0.39');

  expect(
    convertFromTo(0.7347)(0.8924)
  ).toEqual('0.82');

  expect(
    convertFromTo(1)(0.87)
  ).toEqual('1.15');

  expect(
    convertFromTo(1)(0.78)
  ).toEqual('1.28');

  expect(
    convertFromTo(0.87)(0.78)
  ).toEqual('1.12');

  expect(
    convertFromTo(0.78)(0.87)
  ).toEqual('0.90');
});



it('combRates test', () => {
  const USD_BASED_RATES = {
    USD: 1,
    EUR: 0.88,
    GBP: 0.78
  };
  const EUR_BASED_RATES_WITH_EXTRA_CURR = {
    EUR: 1,
    USD: 1.14,
    GBP: 0.89,
    UAH: 31.23,
    KZT: 416.17
  };
  expect(combRates('EUR', USD_BASED_RATES)).toEqual({
    USD: '1.14',
    EUR: '1.00',
    GBP: '0.89'
  });
  expect(combRates('GBP', USD_BASED_RATES)).toEqual({
    USD: '1.28',
    EUR: '1.13',
    GBP: '1.00'
  });
  expect(combRates('UAH', EUR_BASED_RATES_WITH_EXTRA_CURR)).toEqual({
    EUR: '0.03',
    USD: '0.04',
    GBP: '0.03',
    UAH: '1.00',
    KZT: '13.33'
  });
});
