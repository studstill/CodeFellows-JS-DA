// The shift() method removes the first element from an array and
// returns that element. This method changes the length of the array.

module.exports = shift;

function shift() {
  var firstElement = this[0];
  var myArr = [];
  for (var i = 0; i < this.length - 1; i++) {
    this[i] = this[i + 1];
  }
  this.length--;
  return firstElement;
}

