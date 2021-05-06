const assert = require('chai').assert;
const sumAll = require('../code/sumAll');

describe('task2', () => {
  it('Passes all tests', () => {
    assert.equal(sumAll([1,2,3]), 6);
    assert.equal(sumAll([15,16,17,21]), 69);
    assert.equal(sumAll([]), 0);
  });
});