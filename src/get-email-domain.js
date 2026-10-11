const { NotImplementedError } = require("../lib");

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let count = 0;
  for (let item of email) {
    if (item == "@") {
      count += 1;
    }
  }
  return email.split("@")[count];
}

module.exports = {
  getEmailDomain,
};
