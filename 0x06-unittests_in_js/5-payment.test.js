const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./4-payment.js');

describe('sendPaymentRequestToApi', () => {
  let spy;

  beforeEach(() => {
    spy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    spy.restore();
  });

  it('should call calculateNumber with the correct arguments and log total', () => {
    sendPaymentRequestToApi(100, 20);
    expect(console.log.calledOnceWithExactly('The total is: 120')).to.be.true;
  });

  it('should call calculateNumber with the correct arguments and log the total for 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);
    expect(console.log.calledOnceWithExactly('The total is: 20')).to.be.true;
  });
});
