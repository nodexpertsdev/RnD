import assert from 'assert';

describe('Basic Mocha String Test', () => {
  it('should return number of charachters in a string', function() {
    assert.equal('Hello'.length, 5);
  });
});
