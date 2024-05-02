/**
 * send payment request to API
 */

const calculateNumber = require('./utils.js');

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const total = calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${total}`);
};

module.exports = sendPaymentRequestToApi;
