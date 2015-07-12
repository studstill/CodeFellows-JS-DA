var push = require('../push.js');
var expect = require('chai').expect;

describe('push.js', function() {
  it('Should add a new element to the end of an array and return the new ' +
      'length', function() {
    var array = [1, 2, 3, 4];
    var result = [1, 2, 3, 4, 20];
    // Monkey patch the Array.prototype.push with my own implementation;
    Array.prototype.push = push;
    expect(array.push(20)).to.equal(5);
    expect(array).to.eql(result);
  });
});

