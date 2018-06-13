// @flow

import reverse from '../src';

test('reverse', () => {
  expect(reverse('')).toBe('');
  expect(reverse('z')).toBe('z');
  expect(reverse('zz')).toBe('zz');
  expect(reverse('zza')).toBe('azz');
  expect(reverse('qwerty')).toBe('ytrewq');
});
