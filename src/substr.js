// @flow
import { identity, getLength } from './strings';

const substr = (
  str: string = '',
  index: number = 0,
  length: number = getLength(str),
): string => {
  let result: string = '';
  let strIndex: number;
  let strLength: number;

  if (
    index <= getLength(str) &&
    index >= 0 &&
    index + length > getLength(str)
  ) {
    strLength = getLength(str);
  } else if (length < 0) {
    strLength = 1;
  } else {
    strLength = length;
  }

  if (index < 0) {
    strIndex = 0;
  } else {
    strIndex = index;
  }

  if (strLength === 0 && strIndex > getLength(str)) {
    return '';
  }

  if (strIndex === 0 && strLength === getLength(str)) {
    return identity(str);
  }

  for (let i: number = strIndex; i < strLength; i += 1) {
    result += str[strIndex];
  }
  return result;
};

export default substr;
