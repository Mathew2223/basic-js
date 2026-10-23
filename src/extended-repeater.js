const { NotImplementedError } = require("../lib");

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

function repeater(str, options) {
  const {
    repeatTimes = 1,
    separator = "+",
    addition = "",
    additionRepeatTimes = 1,
    additionSeparator = "|",
  } = options || {};

  let result = "";
  let additionBlock = "";

  for (let i = 0; i < additionRepeatTimes; i++) {
    additionBlock += addition;
    if (i < additionRepeatTimes - 1) {
      additionBlock += additionSeparator;
    }
  }

  let singleBlock = str.toString() + additionBlock;

  for (let j = 0; j < repeatTimes; j++) {
    result += singleBlock;
    if (j < repeatTimes - 1) {
      result += separator;
    }
  }

  return result;
}

module.exports = {
  repeater,
};
