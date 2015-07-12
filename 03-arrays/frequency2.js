// frequency2: given an array of english words, figure out what the
// most common letter (anywhere in a word) is.

var highestValueKey = require('./helpers.js').highestValueKey;
module.exports = frequency2;

function frequency2(array) {
  var charString = array.join('');
  var hash = {};
  for (var i = 0; i < charString.length; i++) {
    var uniqueChar = charString.charAt(i).toLowerCase();
    if (uniqueChar in hash)
      hash[uniqueChar]++;
    else
      hash[uniqueChar] = 1;
  }
  return highestValueKey(hash);
}



