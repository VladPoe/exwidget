import { createUrl, withQueryParams } from "./../openExchangeUtils";
import { ENDPOINTS, OEX } from "./../../services/openExchangeService";


it('open exchange url creation test', () => {
  const endpoint = ENDPOINTS.LATEST;
  const params1 = {
    hello: 'world',
    hi: 'there'
  };
  const params2 = {
    name: 'jaqcues',
    surname: 'chirac',
    position: 'president',
    state: 'france'
  };
  expect(
    withQueryParams(createUrl)(endpoint)(params1)
  ).toEqual(`https://openexchangerates.org/api/latest.json?app_id=${OEX.KEY}&hello=world&hi=there`);

  expect(
    withQueryParams(createUrl)(endpoint)(params2)
  ).toEqual(`https://openexchangerates.org/api/latest.json?app_id=${OEX.KEY}&name=jaqcues&surname=chirac&position=president&state=france`);
});