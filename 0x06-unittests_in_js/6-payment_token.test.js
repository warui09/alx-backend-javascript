const sinon = require('sinon');
const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token.js')

describe('getPaymentTokenFromAPI', () => {
  it('should return an object when success is true', () => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done();
      })
      .catch((error) => {
        done(error);
      });
  });
});
