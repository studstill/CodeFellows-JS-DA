// This assignment will have you create a simple Javascript object that
// will be exported using the Node modular pattern we went over in class.

// Your object should have a function named 'greet' that takes a name as a
// parameter and returns the string 'hello ' + name

// You should have at least one test that verifies the output of the
// function.

// Your submission should be a link to a pull request to your own repository.

// Bonus:
// For an extra point, create a command line utility that will be run using
// node greet.js 'some name' and will pass the input contained in that
// argument to the greet function and output the result to the screen.

// For a second bonus point, write a test that makes sure that the arguments
// are being processed.

exports = module.exports = {};

exports.greet = function(name) {
  return 'hello ' + name;
};

exports.argvGreet = function(name) {
  return 'hello ' + name;
};

console.log(exports.argvGreet(process.argv[2]));
