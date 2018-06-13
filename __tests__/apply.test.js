// @flow

import apply from '../src';

test('apply', () => {
  expect(apply(0, Math.sqrt, 4)).toBe(4);
  expect(apply(1, Math.sqrt, 4)).toBe(2);
  expect(apply(2, Math.sqrt, 16)).toBe(2);

  expect(apply(1, v => v ** 2, 3)).toBe(9);
  expect(apply(5, v => v + 10, 3)).toBe(53);
});
