const { expect } = require('chai');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('test SUM', () => {
    expect(calculateNumber('SUM', 3.2, 4)).to.equal(7);
    expect(calculateNumber('SUM', 5, 3.4)).to.equal(8);
    expect(calculateNumber('SUM', 32.9, 9.6)).to.equal(43);
  });

  it('test SUBTRACT', () => {
    expect(calculateNumber('SUBTRACT', 9.1, 1)).to.equal(8);
    expect(calculateNumber('SUBTRACT', 10, 10.5)).to.equal(-1);
    expect(calculateNumber('SUBTRACT', 7.3, 2.7)).to.equal(4);
  });

  it('test DIVIDE', () => {
    expect(calculateNumber('DIVIDE', 3.3, 2)).to.equal(1.5);
    expect(calculateNumber('DIVIDE', 55, 5.4)).to.equal(11);
    expect(calculateNumber('DIVIDE', 39.6, 3.7)).to.equal(10);
    expect(calculateNumber('DIVIDE', 9, 0.4)).to.equal('Error');
  });
});
