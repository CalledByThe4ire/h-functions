/* eslint-disable no-confusing-arrow */
// @flow
const apply = (count: number, fn: Function, value: mixed): mixed =>
  count === 0 ? value : apply(count - 1, fn, fn(value));

export default apply;
