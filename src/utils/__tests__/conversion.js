import { convertFromTo, combRates } from "./../conversion";

it('convertFromTo test', () => {
  expect(
    convertFromTo(1)(0.8327).toFixed(4)
  ).toEqual('1.2009');

  expect(
    convertFromTo(1)(0.8324).toFixed(4)
  ).toEqual('1.2013');

  expect(
    convertFromTo(1)(2.543).toFixed(4)
  ).toEqual('0.3932');

  expect(
    convertFromTo(0.7347)(0.8924).toFixed(4)
  ).toEqual('0.8233');

  expect(
    convertFromTo(1)(0.87).toFixed(4)
  ).toEqual('1.1494');

  expect(
    convertFromTo(1)(0.78).toFixed(4)
  ).toEqual('1.2821');

  expect(
    convertFromTo(0.87)(0.78).toFixed(4)
  ).toEqual('1.1154');

  expect(
    convertFromTo(0.78)(0.87).toFixed(4)
  ).toEqual('0.8966');
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
    USD: '1.1364',
    EUR: '1.0000',
    GBP: '0.8864'
  });
  expect(combRates('GBP', USD_BASED_RATES)).toEqual({
    USD: '1.2821',
    EUR: '1.1282',
    GBP: '1.0000'
  });
  expect(combRates('UAH', EUR_BASED_RATES_WITH_EXTRA_CURR)).toEqual({
    EUR: '0.0320',
    USD: '0.0365',
    GBP: '0.0285',
    UAH: '1.0000',
    KZT: '13.3260'
  });
});
