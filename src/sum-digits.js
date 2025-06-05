const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  // throw new NotImplementedError('Not implemented');
  let num = n.toString().split('')
  while(num.length > 1) {
    let sum = 0
    num.forEach((item, index) => {
      sum += Number(item)
      item[index] = Number(item) - 1
      num = sum.toString().split('')
    })
  }
  return Number(num)
}

module.exports = {
  getSumOfDigits
};
