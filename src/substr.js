// @flow
import getLength from './strings';

export default (
  str: string,
  index: number = 0,
  substrLength: number = getLength(str),
) => {
  // guard expressions
  if (substrLength === 0 || index > getLength(str)) {
    return '';
  }

  if (index === 0 && substrLength === getLength(str)) {
    return str;
  }

  // normalization
  let strIndex: number = index;
  let strLength: number = substrLength;

  if (substrLength < 0) {
    strLength = 1;
  } else if (strIndex + strLength > getLength(str)) {
    strLength = getLength(str);
  }

  if (index < 0) {
    strIndex = 0;
  }

  // implementation
  let result: string = '';
  const initialValue: number = strIndex;
  for (let i: number = strIndex; i <= strLength; i += 1) {
    // eslint-disable-next-line no-continue
    if (initialValue === 0 && i === strLength) continue;
    if (typeof str[i] !== 'undefined') {
      result += str[i];
    }
  }

  return result;
};
