const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample( sampleActivity ) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  if ((!sampleActivity) || (!(typeof(sampleActivity) === 'string'))) return false;

  let C14 = Number(sampleActivity);
  if ((isNaN(C14)) || (C14 <= 0)) return false;

  let age = Math.ceil(Math.log(MODERN_ACTIVITY/C14)/(Math.LN2/HALF_LIFE_PERIOD));

  if (age < 0) return false;

  return age;
}

module.exports = {
  dateSample
};

// console.log(dateSample('1'));
// console.log(dateSample('WOOT!'));
