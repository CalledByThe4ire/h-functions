// @flow

import { If, True, False } from '../src/logic';

test('Boolean', () => {
  expect(If(True)('fo')('bar')).toBe('fo');
  expect(If(False)('foo')('ba')).toBe('ba');
});

