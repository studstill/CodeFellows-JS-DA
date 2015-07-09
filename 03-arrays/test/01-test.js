var duplicates = require('../01-duplicates.js');
var expect = require('chai').expect;

describe('01-duplicates', function() {
  it('should return false if no duplicates are found in an array', function() {
    var array = [1, 2, 3, 4, 5];
    expect(duplicates(array)).to.equal(false);
  });
  it('should return true if duplicates are found in the array', function() {
    var array = ['foo', 'bar', 'bar', 'baz'];
    expect(duplicates(array)).to.equal(true);
  });
});
