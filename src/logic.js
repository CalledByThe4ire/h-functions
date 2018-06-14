// @flow
export const If = (fn: (x: mixed, y: mixed) => mixed) => (fn: (x: mixed, y: mixed) => mixed);
export const True = (x: mixed) => () => (x: mixed);
export const False = () => (y: mixed) => (y: mixed);
