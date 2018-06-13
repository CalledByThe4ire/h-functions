// @flow

import buildHtml from '../src';
import { html } from 'js-beautify';

test('htmlBuilder', () => {
  expect(html(buildHtml())).toMatchSnapshot();
});
