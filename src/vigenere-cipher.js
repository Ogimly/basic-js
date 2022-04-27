const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(modification = true) {
    this.direct = modification;
  }
  encrypt(message, keyWord) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    if ((!message) || (!keyWord)) throw new Error('Incorrect arguments!');

    let mess = message.toUpperCase();
    let key = keyWord.toUpperCase();
    let result = '';
    let lenMess = mess.length;
    let lenKey = key.length;
    //A..Z => 65..90 n = 25
    let A = 65; let Z = 90; let n = 26;

    //console.log('mess: '+mess+' key: '+key+' res: AEIHQX SX DLLU!');

    let j = 0;
    for (let i = 0; i < lenMess; i++) {
      let el = mess[i];
      let codeMess = mess.charCodeAt(i);

      if (codeMess >= A && codeMess <= Z) { //latin alphabet

        //console.log('i: '+i+' latin: '+el+' codeMess: '+codeMess);

        let codeKey = key.charCodeAt(j % lenKey);
        let codeNew = A + (((codeMess - A) + (codeKey - A)) % n);
        result += String.fromCharCode(codeNew);
        j++;

        // console.log('codeKey: '+codeKey+' codeNew: '+codeNew+' elNew: '+String.fromCharCode(codeNew));
        // console.log('result: '+result);

      } else {
        result += el;
      }
    }

    if (this.direct) {
      return result;
    }
    else {
      return result.split('').reverse().join('')
    }

  }
  decrypt(message, keyWord) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    if ((!message) || (!keyWord)) throw new Error('Incorrect arguments!');

    let mess = message.toUpperCase();
    let key = keyWord.toUpperCase();
    let result = '';
    let lenMess = mess.length;
    let lenKey = key.length;
    //A..Z => 65..90 n = 25
    let A = 65; let Z = 90; let n = 26;

    // console.log('mess: '+mess+' key: '+key+' res: ATTACK AT DAWN!');

    let j = 0;
    for (let i = 0; i < lenMess; i++) {
      let el = mess[i];
      let codeMess = mess.charCodeAt(i);

      if (codeMess >= A && codeMess <= Z) { //latin alphabet

        // console.log('i: '+i+' latin: '+el+' codeMess: '+codeMess);

        let codeKey = key.charCodeAt(j % lenKey);
        let codeNew = A + ((n + (codeMess - A) - (codeKey - A)) % n);
        result += String.fromCharCode(codeNew);
        j++;

        // console.log('codeKey: '+codeKey+' codeNew: '+codeNew+' elNew: '+String.fromCharCode(codeNew));
        // console.log('result: '+result);

      } else {
        result += el;
      }
    }

    if (this.direct) {
      return result;
    }
    else {
      return result.split('').reverse().join('')
    }

  }
}

module.exports = {
  VigenereCipheringMachine
};

const directMachine = new VigenereCipheringMachine();
const reverseMachine = new VigenereCipheringMachine(false);

// console.log(directMachine.encrypt('attack at dawn!', 'alphonse'));
// console.log(directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse'));
// console.log(reverseMachine.encrypt('attack at dawn!', 'alphonse'));
// console.log(reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse'));
