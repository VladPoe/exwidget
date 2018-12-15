import {createUrl, withQueryParams, getOExData, createUrlWrongKey} from "./../utils/openExchangeUtils";
import userData from './../constants/userData';
import currencies from './../constants/currencies';

export const OEX = {
  KEY: '45df0613a845463591657cc7242dd4c0',
  FAKE_KEY: 'qwerty12345',
  BASE_URL: 'https://openexchangerates.org/api'
};

export const ENDPOINTS = {
  LATEST: '/latest.json'
};

const getBasicRates = () => {
  const endpoint = ENDPOINTS.LATEST;
  const params = {
    'base': userData.mainCurrency,
    'symbols': Object.values(currencies).map(({ code }) => code).join(',')
  };
  const url = withQueryParams(createUrl)(endpoint)(params);
  console.log('url requested = ', url);
  return getOExData(url);
};

const getBasicRatesWithError = () => {
  const endpoint = ENDPOINTS.LATEST;
  const params = {
    'base': userData.mainCurrency,
    'symbols': Object.values(currencies).map(({ code }) => code).join(',')
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