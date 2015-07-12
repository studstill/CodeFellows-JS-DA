var frequency2 = require('../frequency2.js');
var expect = require('chai').expect;

describe('frequency2.js', function() {
  it('should return the char that appears most often', function() {
    var array = ['Jason', "John", 'taylor', 'jjj', 'ZesTYYYY'];
    expect(frequency2(array)).to.eql('j');
  });
});

