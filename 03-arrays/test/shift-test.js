var shift = require('../shift.js');
var expect = require('chai').expect;

describe('shift.js', function() {
  it('Should remove the first element from an array, return that element, ' +
     'and change the length of the array.',
       function() {
    var array = ['foo', 'bar', 'baz', 'GREAT SCOTT!'];
    var result = ['bar', 'baz', 'GREAT SCOTT!'];
    // Store the original shift method so the script finishies properly.
    var oldShift = Array.prototype.shift;
    // Monkey patch the Array.prototype.shift with my own implementation;
    Array.prototype.shift = shift;
    expect(array.shift()).to.eql('foo');
    expect(array.length).to.eql(3);
    expect(array).to.eql(result);
    // Reassign the original method so the test finishes running
    Array.prototype.shift = oldShift;
  });
});

