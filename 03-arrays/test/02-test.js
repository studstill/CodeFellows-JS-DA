var mostRepeatedChar = require('../02-most-repeated-charAt0.js');
var expect = require('chai').expect;

describe('02-most-repeated-charAt0.js', function() {
  it('should return the char that appears most often', function() {
   var array = ['foo', 'bar', 'baz'];
   expect(mostRepeatedChar(array)).to.equal('b');
  });
});

