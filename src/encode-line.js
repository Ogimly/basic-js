const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine( str ) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let res = '';

  if (str.length === 0) return res;

  let el = str[0];
  let counter = 1;

  for (let i = 1; i < str.length; i++) {
    if (str[i] === el) {counter++}
    else {
      res += ((counter === 1) ? '' : counter) + el;
      el = str[i];
      counter = 1;
    }
  }
  res += ((counter === 1) ? '' : counter) + el;

  return res;
}

module.exports = {
  encodeLine
};

//console.log(encodeLine('aabbbc'));
