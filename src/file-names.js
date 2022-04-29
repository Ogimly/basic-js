const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles( names ) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  if (names.length === 0) return [];

  let set = {};
  let res = [];

  names.forEach(el => {

    if (set[el]) { 
      let newName = el + '(' + set[el] + ')';

      if (set[newName]) { 
        set[newName]++;
      } else {
        set[newName] = 1;
      }
  
      res.push(newName);
      set[el]++;
    } else {
      set[el] = 1;
      res.push(el);
    }
  });

  return res;

}

module.exports = {
  renameFiles
};

//console.log(renameFiles(["file", "file", "image", "file(1)", "file"]));