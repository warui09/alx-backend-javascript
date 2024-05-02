/**
 * simulate async behavior for testing purposes
 */

const getPaymentTokenFromAPI = (success) => {  
  if (success) { 
    return new Promise((resolve, reject) => { 
      resolve({ data: 'Successful response from the API' });
    });
  } else {
    return Promise.resolve();
  }
};

module.exports = getPaymentTokenFromAPI;
