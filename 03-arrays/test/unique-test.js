var unique = require('../unique.js');
var expect = require('chai').expect;

describe('unique.js', function() {
  it('should return a copy of the array with all the duplicates removed', function() {
    var array1 = [1, 2, 3, 3, 3, 3, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5];
    var result1 = [1, 2, 3, 4, 5];
    var array2 = [1, 2, 2, 2, 3, 'apple', 'ball', 'ball', 'cap', 'cap', 'cap'];
    var result2 = [1, 2, 3, 'apple', 'ball', 'cap'];
    expect(unique(array1)).to.eql(result1);
    expect(unique(array2)).to.eql(result2);
  });
});
