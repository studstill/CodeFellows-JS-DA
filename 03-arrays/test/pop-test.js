var pop = require('../pop.js');
var expect = require('chai').expect;

describe('pop.js', function() {
  it('Should remove the last element from an array and return that element',
       function() {
    var array = [1, 2, 3, 4];
    Array.prototype.myPop = pop;
    expect(array.myPop()).to.eql(4);
    expect(array[array.length - 1]).to.eql(undefined);
  });
});

