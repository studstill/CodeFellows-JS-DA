var greet = require('../greet');
var expect = require('chai').expect;

describe('greet.js', function() {
  it('will say "hello Jason" when passed Jason', function() {
    expect(greet.greet('Jason')).to.eql('hello Jason');
  });
});
