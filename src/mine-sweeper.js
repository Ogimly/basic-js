const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper( matrix ) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let lenRow = matrix.length;
  if (lenRow === 0) return res;

  // console.log(len);
  // console.log(matrix[0].length);

  let lenCol = matrix[0].length;

  let res = new Array(lenRow).fill(0).map(row => new Array(lenCol).fill(0));
  // console.log(res);

  let newLine = Array.from({ length: (lenCol+ 2) }, (v, k) => false);
  // console.log(newLine);

  for (let i = 0; i < lenRow; i++) {
    matrix[i].unshift(false);
    matrix[i].push(false);
  };
  matrix.unshift(newLine);
  matrix.push(newLine);

  //console.log(matrix);

  lenRow = matrix.length;
  lenCol = matrix[0].length;

  for (let i = 1; i < lenRow - 1; i++) {
    for (let j = 1; j < lenCol - 1; j++) {
      if (matrix[i - 1][j - 1]) res[i - 1][j - 1]++;
      if (matrix[i - 1][j]) res[i - 1][j - 1]++;
      if (matrix[i - 1][j + 1]) res[i - 1][j - 1]++; 

      if (matrix[i][j - 1]) res[i - 1][j - 1]++;
      if (matrix[i][j + 1]) res[i - 1][j - 1]++; 

      if (matrix[i + 1][j - 1]) res[i - 1][j - 1]++;
      if (matrix[i + 1][j]) res[i - 1][j - 1]++;
      if (matrix[i + 1][j + 1]) res[i - 1][j - 1]++; 
    };
  };

  return res;
}

module.exports = {
  minesweeper
};

// console.log(minesweeper([
//     [true, false, false],
//     [false, true, false],
//     [false, false, false]
//    ]));