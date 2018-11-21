import areDeeplyEqual from './../areDeeplyEqual';


it('are deeplyEqual test', () => {
  const o1 = {
    base: 'USD',
    rates: {
      USD: 1,
      EUR: 0.87,
      GBP: 0.78
    },
    timestamp: 124354535
  };
  const o2 = {
    base: 'USD',
    rates: {
      USD: 1,
      EUR: 0.81,
      GBP: 0.78
    },
    timestamp: 124354535
  };
  const o3 = {
    base: 'EUR',
    rates: {
      USD: 1,
      EUR: 0.87,
      GBP: 0.78
    },
    timestamp: 124354535
  };
  const o4 = {
    base: 'USD',
    rates: {
      USD: 1,
      EUR: 0.87,
      GBP: 0.78
    },
    timestamp: 124354535
  };

  expect(
    areDeeplyEqual(o1, o2)
  ).toEqual(false);
  expect(
    areDeeplyEqual(o2, o3)
  ).toEqual(false);
  expect(
    areDeeplyEqual(o3, o4)
  ).toEqual(false);
  expect(
    areDeeplyEqual(o4, o1)
  ).toEqual(true);
});