// unique: implement a function called unique. It takes an array and
// returns a copy of the array with all the duplicates removed.

function unique(array) {
  array = array.sort();
  var newArray = [];
  newArray.push(array[0]);
  for (var i = 0, j = 1; j < array.length; j++) {
    if (newArray[i] !== array[j]) {
      newArray.push(array[j]);
      i++;
    }
  }
  return newArray;
}

module.exports = unique;

