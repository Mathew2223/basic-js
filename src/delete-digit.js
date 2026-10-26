const { NotImplementedError } = require("../lib");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */

function deleteDigit(n) {
  const digits = n.toString().split("");
  let maxDigits = 0;

  for (let i = 0; i < digits.length; i++) {
    const newDigit = [...digits];
    newDigit.splice(i, 1);
    const num = parseInt(newDigit.join(""));
    maxDigits = Math.max(maxDigits, num);
  }
  return maxDigits;
}

module.exports = {
  deleteDigit,
};
