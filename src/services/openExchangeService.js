import {createUrl, withQueryParams, getOExData, createUrlWrongKey} from "./../utils/openExchangeUtils";
import userData from './../constants/userData';
import currencies from './../constants/currencies';

export const OEX = {
  KEY: 'fc779e3a532945d490a444b885f659f7',
  FAKE_KEY: 'qwerty12345',
  BASE_URL: 'https://openexchangerates.org/api'
};

export const ENDPOINTS = {
  LATEST: '/latest.json'
};

const getBasicRates = () => {
  const endpoint = ENDPOINTS.LATEST;
  const params = {
    'base': userData.baseCurrency,
    'symbols': `${currencies.EUR.code},${currencies.USD.code},${currencies.GBP.code}`
  };
  const url = withQueryParams(createUrl)(endpoint)(params);
  console.log('url requested = ', url);
  // return getBasicRatesWithError();  // to trigger API error
  return getOExData(url);
};

const getBasicRatesWithError = () => {
  const endpoint = ENDPOINTS.LATEST;
  const params = {
    'base': userData.baseSymbol,
    'symbols': `${currencies.EUR.code},${currencies.USD.code},${currencies.GBP.code}`
  };
  const url = withQueryParams(createUrlWrongKey)(endpoint)(params);
  console.log('url requested = ', url);
  return getOExData(url);
};


const openExchangeService = {
  getBasicRates,
  getBasicRatesWithError
};

export default openExchangeService;