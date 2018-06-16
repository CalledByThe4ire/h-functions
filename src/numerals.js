/* eslint-disable import/prefer-default-export, no-unused-vars */
// @flow
const compose = (f: Function) => (g: Function) => (x: mixed) => f(g(x));
export const Zero = (fn: Function) => (x: mixed) => (x: mixed);
export const Succ = (num: Function) => (fn: Function) => compose(fn)(num(fn));
