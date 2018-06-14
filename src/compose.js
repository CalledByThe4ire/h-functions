// @flow
type fn = (arg: mixed) => mixed;
export default (f: fn, g: fn) => (x: mixed) => f(g(x));
