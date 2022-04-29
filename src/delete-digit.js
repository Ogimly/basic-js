const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let str = '' + n;
  let max = 0;

  for (let i = 0; i < str.length; i++) {
    let subStr = str.slice(0, i) + str.slice(i + 1);
    max = Math.max(max, +subStr);
  }

  return max;
}

module.exports = {
  deleteDigit
};


//console.log(deleteDigit(152));