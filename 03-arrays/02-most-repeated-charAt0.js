// Given an array of strings, return the character that
// appears most often at the beginning of each string

var highestValueKey = require('./helpers.js').highestValueKey;
module.exports = mostRepeatedChar;

function mostRepeatedChar(array) {
  var hash = {};
  for (var i = 0; i < array.length; i++) {
    var firstChar = array[i].charAt(0);
    if (firstChar in hash)
      hash[firstChar]++;
    else
      hash[firstChar] = 1;
  }
  return highestValueKey(hash);
}

