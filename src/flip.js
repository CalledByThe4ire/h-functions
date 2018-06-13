// @flow
const flip = (fn: (a: mixed, b: mixed) => Function) => (a: mixed, b: mixed): Function => fn(b, a);

export default flip;
