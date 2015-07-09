var unshift = require('../unshift.js');
var expect = require('chai').expect;

describe('unshift.js', function() {
  it('Should add one or more elements to the beginning of an array ' +
     'and returns the new length of the array.',
       function() {
    var array = ['is', 42,];
    var result = ['The meaning of life', 'is', 42];
    // Store the original unshift method so the script finishies properly.
    var oldUnshift = Array.prototype.unshift;
    // Monkey patch the Array.prototype.unshift with my own implementation;
    Array.prototype.unshift = unshift;
    expect(array.unshift('The meaning of life')).to.eql(result.length);
    expect(array.length).to.eql(3);
    expect(array).to.eql(result);
    // Reassign the original method so the test finishes running
    Array.prototype.unshift = oldUnshift;
  });
});
