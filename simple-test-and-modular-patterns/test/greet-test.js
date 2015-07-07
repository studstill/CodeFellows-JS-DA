var greet = require('../greet');
var expect = require('chai').expect;

describe('greet.js', function() {
  describe('#greet(name)', function() {
    it('will say "hello Jason" when passed Jason', function() {
      expect(greet.greet('Jason')).to.eql('hello Jason');
    });
  });
  describe('#argvGreet(name)', function() {
    it('will say "hello Jason" when the third command-line argument is Jason', function() {
      // Nick Kuhn helped me realize that you simply need to mock-up an
      // argv array.  I was trying to actually pass process.argv[2] to the
      // test, but I could not figure out how to have mocha handle a specific
      // situation when the command "node greet.js Jason" was executed
      var argvArray = ['node', 'greet.js', 'Jason'];
      expect(greet.argvGreet(argvArray[2])).to.eql('hello Jason');
    });
  });
});
