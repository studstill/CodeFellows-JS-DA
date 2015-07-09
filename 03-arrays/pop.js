// The pop() method removes the last element from an array and returns
// that element.

module.exports = pop;

function pop() {
  var lastElement = this[this.length - 1];
  delete this[this.length - 1];
  return lastElement;
}

