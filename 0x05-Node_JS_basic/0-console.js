/**
 * Prints a message to STDOUT.
 * @param {String} message - the message to print.
 */

module.exports = function displayMessage(message) {
  process.stdout.write(`${message}\n`);
};
