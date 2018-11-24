import { sumRegexp } from "../currencies";

it('cumRegexp test', () => {
  expect(
    sumRegexp.test('hello')
  ).toEqual(false);

  expect(
    sumRegexp.test('2,54')
  ).toEqual(false);

  expect(
    sumRegexp.test('2.')
  ).toEqual(true);

  expect(
    sumRegexp.test('.65')
  ).toEqual(false);

  expect(
    sumRegexp.test('')
  ).toEqual(true);

  expect(
    sumRegexp.test('2.543')
  ).toEqual(false);

  expect(
    sumRegexp.test('0.12')
  ).toEqual(true);

  expect(
    sumRegexp.test('56323.53')
  ).toEqual(true);

  expect(
    sumRegexp.test('560000987654.53')
  ).toEqual(true);

  expect(
    sumRegexp.test('5763230987654.53')
  ).toEqual(false);
});