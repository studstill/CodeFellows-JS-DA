// The unshift() method adds one or more elements to the beginning
// of an array and returns the new length of the array.

module.exports = unshift;

function unshift(newElement) {
  this.length++;
  for (var i = this.length - 1; i > 0; i--) {
    this[i] = this[i - 1];
  }
  this[0] = newElement;
  return this.length;
}

