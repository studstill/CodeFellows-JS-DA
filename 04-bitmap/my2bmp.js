/*jshint node: true */
'use strict';

var fs = require('fs');
var EventEmitter = require('events').EventEmitter;
var ee = new EventEmitter();

fs.readFile('lib/non-palette-bitmap.bmp', function(err, data) {
  var imageData = data.slice(54);

  // The function below (invertHexColor) is a modified version of a
  // funciton that I found on Stack Overflow here:
  // http://stackoverflow.com/questions/11023144/working-with-hex-strings-and-hex-values-more-easily-in-javascript#answers-header

  function invertHexColor(hexColor) {
    var hexString = (parseInt('ffffff', 16) - parseInt(hexColor, 16)).toString(16);
    // Pad the new hex values with zeroes, if necessary
    while (hexString.length < 6) {
      hexString = '0' + hexString;
    }
    return hexString;
  }

  var inverseImageDataString = '';
  for (var i = 0; i < 30000; i++) {
    var temp = invertHexColor(imageData.slice(i, i + 3).toString('hex'));
    imageData.write(temp, i, 'hex');
  }

  fs.writeFile('lib/new-non-palette.bmp', data, function(err) {
    if (err) throw err;
  });
});
