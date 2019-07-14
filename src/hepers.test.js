const { minusFive, timesTwo, doMath } = require('./helpers');

test('20 minus 5 is 15', () => {
  expect(minusFive(20)).toBe(15);
});

test('20 times 2 is 40', () => {
  expect(timesTwo(20)).toBe(40);
});

test('20 minus 5, then times 2 should be 30', () => {
  expect(doMath(20)).toBe(30)
});