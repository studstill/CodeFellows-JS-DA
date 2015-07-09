// The push() method adds one or more elements to the end of an array and
// returns the new length of the array.

module.exports = push;

function push(element) {
  this[this.length] = element;
  return this.length;
}

