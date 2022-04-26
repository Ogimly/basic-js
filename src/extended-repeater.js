const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater( str, options = {}) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  const repeatSubStr = (subStr, repeatTimes, separator) => {
    //console.log('str: '+subStr+' repeatTimes: '+repeatTimes+' separator: '+separator);

    if (repeatTimes === 0) return '';

    let resStr = '';

    for (let i = 0; i < repeatTimes - 1; i++) {
      resStr += subStr + separator;
    };

    return resStr + subStr;
  };

  const prepareParameters = (str, options) => {
    str = ''+str;

    let defOptions = {repeatTimes: 1, separator: '+', addition: '', additionRepeatTimes: 1, additionSeparator: '|'};

    if (!(typeof(options) == 'object')) options = {};
    if (!options.hasOwnProperty('repeatTimes')) options.repeatTimes = defOptions.repeatTimes;
    if (!options.hasOwnProperty('separator')) options.separator = defOptions.separator;
    if (!options.hasOwnProperty('addition')) options.addition = defOptions.addition;
    options.addition = ''+options.addition;
    if (!options.hasOwnProperty('additionRepeatTimes')) options.additionRepeatTimes = defOptions.additionRepeatTimes;
    if (!options.hasOwnProperty('additionSeparator')) options.additionSeparator = defOptions.additionSeparator;

    return options
  };

  options = prepareParameters(str, options);

  let resStr = '';

  resStr = repeatSubStr(options.addition, options.additionRepeatTimes, options.additionSeparator);
  resStr = repeatSubStr(str + resStr, options.repeatTimes, options.separator);

  return resStr

}

module.exports = {
  repeater
};

//console.log(repeater('STRING', 5));