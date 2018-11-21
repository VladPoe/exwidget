import { OEX } from '../services/openExchangeService';


const didRequestSucceed = (status) => status >= 200 && status < 300;

const checkStatus = (response) => {
  return didRequestSucceed(response.status)
    ? Promise.resolve(response)
    : Promise.reject(`API response: ${response.statusText}`)
};

const getJson = (response) =>  response.json();

export const createUrl = (endpoint) => {
  return OEX.BASE_URL
    + endpoint
    + `?app_id=${OEX.KEY}`
    ;
};

export const createUrlWrongKey = (endpoint) => {
  return OEX.BASE_URL
    + endpoint
    + `?app_id=${OEX.FAKE_KEY}`
    ;
};

export const withQueryParams = (createUrlFoo) => (endpoint) => (paramsObj) => {
  return Object.entries(paramsObj).reduce((acc, [key, val]) => {
    return acc + `&${key}=${val}`;
  }, createUrlFoo(endpoint));
};

export const getOExData = (url) => {
  return fetch(url)
    .then(checkStatus)
    .then(getJson)
};
