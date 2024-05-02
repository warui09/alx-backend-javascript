const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./4-payment.js');

describe('sendPaymentRequestToApi', () => {
  it('should always return 10', () => {
    const stub = sinon.stub(Utils, 'calculateNumber');
    stub.returns(10);

    sendPaymentRequestToApi(100, 20);
    expect(stub(100, 20)).to.equal(10);
    stub.restore();
  });

  it('should call calculateNumber with the correct arguments', () => {   
    const spy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);
    expect(spy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    spy.restore();
  });

  it('should log the correct total to the console', () => {
    const consoleSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
    consoleSpy.restore();
  });
});
