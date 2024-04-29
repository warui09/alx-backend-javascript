/**
 * Prints a message to STDOUT.
 * @param {String} message - the message to print.
 */

const displayMessage = (message) => {
  process.stdout.write(`${message}\n`);
};

module.exports = displayMessage;
