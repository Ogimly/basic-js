const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats( domains ) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  res = {};
  allDomains = [];
  for (let i = 0; i < domains.length; i++) {

    let arr = domains[i].split('.');

    let el = '';
    for (let j = arr.length; j > 0; j--) {
      el += '.' + arr[j-1];
      allDomains.push(el);
    }
  }

  allDomains.forEach(el => {
    if (res[el]) {
      res[el]++;
    } else {
      res[el] = 1;
    }
  });
return res;

}

module.exports = {
  getDNSStats
};


//console.log(getDNSStats(['code.yandex.ru', 'music.yandex.ru', 'yandex.ru']));