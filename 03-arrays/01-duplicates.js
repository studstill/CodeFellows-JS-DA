 // Given an array, check for duplicates.
 // Return true if duplicates, false if no duplicates

function duplicates(array) {
  var hash = {};
  for (var i = 0; i < array.length; i++) {
    if (hash[array[i]] === 1)
      return true;
    else
      hash[array[i]] = 1;
  }
  return false;
}

module.exports = duplicates;

// duplicates([1,2,2,3]);
// >true

// duplicates([1,2,3]);
// >false
