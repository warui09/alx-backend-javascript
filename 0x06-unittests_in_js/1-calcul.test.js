const assert = require('assert');
const calculateNumber = require("./1-calcul.js");

describe('calculateNumber', () => {
  it('test SUM', () => {
    assert.equal(calculateNumber('SUM', 3.2, 4), 7);
    assert.equal(calculateNumber('SUM', 5, 3.4), 8);
    assert.equal(calculateNumber('SUM', 32.9, 9.6), 43);
  });

  it('test SUBTRACT', () => {
    assert.equal(calculateNumber('SUBTRACT', 9.1, 1), 8);
    assert.equal(calculateNumber('SUBTRACT', 10, 10.5), -1);
    assert.equal(calculateNumber('SUBTRACT', 7.3, 2.7), 4);
  });

  it('test DIVIDE', () => {
    assert.equal(calculateNumber('DIVIDE', 3.3, 2), 1.5);
    assert.equal(calculateNumber('DIVIDE', 55, 5.4), 11);
    assert.equal(calculateNumber('DIVIDE', 39.6, 3.7), 10);
    assert.equal(calculateNumber('DIVIDE', 9, 0.4), 'Error');
  });
});
