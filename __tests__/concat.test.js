// @flow
import concat from '../src';

test('compose', () => {
  expect(concat('')('')('')).toBe('');
  expect(concat('a')('bc')('f')).toBe('abcf');
});
