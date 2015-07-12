var pop = require('../pop.js');
var expect = require('chai').expect;

describe('pop.js', function() {
  it('Should remove the last element from an array and return that element',
       function() {
    var array = [1, 2, 3, 4];
    // Store the original pop method so the script finishies properly.
    var oldPop = Array.prototype.pop;
    // Monkey patch the Array.prototype.pop with my own implementation;
    Array.prototype.pop = pop;
    expect(array.pop()).to.eql(4);
    expect(array.length).to.eql(3);
    // Reassign the original method so the test finishes running
    Array.prototype.pop = oldPop;
  });
});

