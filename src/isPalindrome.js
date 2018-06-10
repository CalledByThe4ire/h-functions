// @flow
import { length, substr } from './strings';

const isPalindrome = (str: string): boolean => {
  if (length(str) < 2) {
    return true;
  }

  if (substr(str, 0, 1) !== substr(str, length(str) - 1, 1)) {
    return false;
  }

  return isPalindrome(substr(str, 1, length(str) - 2));
};

export default isPalindrome;
