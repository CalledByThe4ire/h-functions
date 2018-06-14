// @flow

export default (fn: Function, arg2: mixed) => (arg1: mixed) => fn(arg1, arg2);
