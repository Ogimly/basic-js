const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 */
const chainMaker = {
  arr: [],
  getLength() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.arr.length;
  },
  addLink( value = '' ) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.arr.push(value);

    return this;
  },
  removeLink( position ) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    if ((!position) || isNaN(position) || (position <= 0) || (position > this.arr.length) || !(Number.isInteger(position))) {
      this.arr = [];
      throw new Error("You can't remove incorrect link!");
    }

    this.arr.splice(position - 1, 1);

    return this;
  },
  reverseChain() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let reverseArr = this.arr.slice(0);
    this.arr = reverseArr.reverse().slice(0);

    return this;
  },
  finishChain() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let resChain = '';
    let len = this.arr.length;

    while (len > 1) {
      resChain += '( ' + this.arr[0] + ' )~~';
      this.arr.splice(0, 1);
      len = this.arr.length;
    }
    
    if (len > 0) {
      resChain += '( ' + this.arr[0] + ' )';
      this.arr.splice(0, 1);
    }

    return resChain;
  }
};

module.exports = {
  chainMaker
};


// console.log(chainMaker.addLink(1).addLink(2).addLink(3).finishChain());// => '( 1 )~~( 2 )~~( 3 )'
// console.log(chainMaker.addLink(1).addLink(2).removeLink(1).addLink(3).finishChain());// => '( 2 )~~( 3 )'
// console.log(chainMaker.addLink(1).addLink(2).reverseChain().addLink(3).finishChain());// => '( 2 )~~( 1 )~~( 3 )'
//console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(0));
//console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink('2nd'));
//console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(-2));
//console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(4));
