
exports.highestValueKey = function(object) {
  var highestValue = 0;
  var highestValueKey;
  for (var key in object) {
    if (object[key] > highestValue) {
      highestValue = object[key];
      highestValueKey = key;
    }
  }
  return highestValueKey;
}
