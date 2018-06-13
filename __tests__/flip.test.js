// @flow

import flip from '../src';

test('reverseSub', () => {
  const sub = (a, b) => a - b;
  const reverseSub = flip(sub);
  expect(reverseSub(1, 2)).toBe(1);
  expect(reverseSub(5, 3)).toBe(-2);
});

test('wop', () => {
  const wop = flip(Math.pow);
  expect(wop(1, 2)).toBe(2);
  expect(wop(3, 2)).toBe(8);
});
