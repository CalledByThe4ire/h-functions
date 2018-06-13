// @flow

const reverse = (str: string): string => {
  const iter = (index: number, accumulator: string) => {
    if (str[index] === undefined) {
      return accumulator;
    }
    return iter(index + 1, `${str[index]}${accumulator}`);
  };
  return iter(0, '');
};

export default reverse;
