import { decimal, divide } from "./../decimal";


it('decimals', () => {
  expect(decimal(2.543254).toString()).toEqual('2.543254');

  expect(decimal(0.54).toString()).toEqual('0.54');

  expect(
    divide(decimal(4.426))(2)
  ).toEqual('2.2130');

  expect(
    divide(decimal(34.996733))(2)
  ).toEqual('17.4984');

  expect(
    divide(decimal(354.876733))(3.8)
  ).toEqual('93.3886');
});