// @flow

const apply = (amount: number, fn: Function, arg: mixed): mixed => {
  if (!amount) {
    return arg;
  }
  return fn(apply(amount - 1, fn, arg));
};

export default apply;
