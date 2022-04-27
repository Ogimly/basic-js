const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth( arr ) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    let subDeepMax = 0;

    for (let i = 0; i < arr.length; i++) {
      const el = arr[i];

      if (Array.isArray(el)) {
        subDeepMax = Math.max(this.calculateDepth(el), subDeepMax);
      }
    }

    return (1 + subDeepMax);
  }
}

module.exports = {
  DepthCalculator
};

const depthCalc = new DepthCalculator();

// console.log(depthCalc.calculateDepth([1, 2, 3, 4, 5]));// => 1
// console.log(depthCalc.calculateDepth([1, 2, 3, [4, 5]]));// => 2
// console.log(depthCalc.calculateDepth([[[]]]));// => 3
