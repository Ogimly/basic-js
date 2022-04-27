const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform( arr ) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  if (!arr) throw new Error("'arr' parameter must be an instance of the Array!");
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");

  let newArr = arr.slice(0);

  let i = 0; let len = newArr.length;
  
  while (i < len) {

    let el = newArr[i];

    // console.log(newArr);
    // console.log('i: '+i+' el: '+el);

    if (el === '--double-next') {
      if (i < (len - 1)) {
        newArr[i] = newArr[i + 1];
        i++;
      } else {
        newArr.splice(i, 1);
      };

    } else if (el === '--double-prev') {
      if (i > 1) {
        newArr[i] = newArr[i - 1];
        i++;
      } else {
        newArr.splice(i, 1);
      };

    } else if (el === '--discard-next') {
      newArr.splice(i, 1);
      if (i < (len - 1)) {
        newArr[i] = el;
        i++;
        //newArr.splice(i, 1);
      };

    } else if (el === '--discard-prev') {
      newArr.splice(i, 1);
      if (i > 1) {
        newArr[i - 1] = el;
        i++;
        //newArr.splice(i - 1, 1);
      };

    } else {
      i++;
    }

    len = newArr.length;
  };

  i = 0; len = newArr.length;
  
  while (i < len) {

    let el = newArr[i];

    // console.log(newArr);
    // console.log('i: '+i+' el: '+el);

    if (el === '--discard-next') {
      newArr.splice(i, 1);
    } else if (el === '--discard-prev') {
      newArr.splice(i, 1);
    } else {
      i++;
    }

    len = newArr.length;
  };


  return newArr;

}

module.exports = {
  transform
};

// console.log(transform([1, 2, 3, '--double-next', 4, 5]) );
// console.log(transform([1, 2, 3, '--discard-prev', 4, 5]) );
// console.log(transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]) );
// console.log(transform([1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5]) );
// console.log(transform([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5]) );
// console.log(transform([1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5]) );
