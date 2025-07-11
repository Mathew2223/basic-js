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
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const res = [];
  let skip = false;

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    
    if (skip) {
      skip = false;
      continue;
    }
    if (current === '--double-next') {
      if (i + 1 < arr.length) {
        res.push(arr[i + 1]);
      }
      } else if (current === '--discard-prev') {
          if (res.length > 0) {
              res.pop();
          }
      } else if (current === '--discard-next') {
          skip = true;
      } else if (current === '--double-prev') {
          if (res.length > 0) {
              res.push(res[res.length - 1]);
          }
      } else {
          res.push(current);
      }
  }
  return res;
}



module.exports = {
  transform
};
