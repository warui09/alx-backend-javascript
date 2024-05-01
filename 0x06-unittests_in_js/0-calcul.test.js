const assert = require('assert');
const calculateNumber = require("./0-calcul.js");

describe('caclulateNumber', () => {
  it('test rounding of a', () => {
    assert.equal(calculateNumber(1.2, 1), 2);
    assert.equal(calculateNumber(10.8, 4), 15);
    assert.equal(calculateNumber(5.5, 2), 8);
    assert.equal(calculateNumber(100.9, 9), 110);
  });
  
  it('test rounding of b', () => {
    assert.equal(calculateNumber(10, 1.1), 11);
    assert.equal(calculateNumber(1, 4.4), 5);
    assert.equal(calculateNumber(7, 7.2), 14);
    assert.equal(calculateNumber(55, 9.9), 65);
  });

  it('test sum of rounded a and b', () => {
    assert.equal(calculateNumber(2.4, 1.1), 3);
    assert.equal(calculateNumber(6.1, 4.4), 10);  
    assert.equal(calculateNumber(9.7, 7.2), 17);
    assert.equal(calculateNumber(55.6, 9.7), 66);  
  });
});
