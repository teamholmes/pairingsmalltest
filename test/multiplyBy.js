const assert = require('chai').assert;
const multiplyBy = require('../code/multiplyBy');

describe('task1', () => {
  it('passes all the tests', () => {
    assert.equal(multiplyBy(5)(10), 50);
    assert.equal(multiplyBy(2)(3), 6);
  });
});
