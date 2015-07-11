/*jshint node: true */
'use strict';

var fs = require('fs');
var EventEmitter = require('events').EventEmitter;
var ee = new EventEmitter();

fs.readFile('lib/palette-bitmap.bmp', function(err, data) {
  var palette = data.slice(54, 1078);

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

  var inversePaletteString = '';
  for (var i = 0; i < (1078 - 54); i += 4) {
    var temp = invertHexColor(palette.slice(i, i + 3).toString('hex'));
    inversePaletteString += temp;
    palette.write(temp, i, 'hex');
  }

  fs.writeFile('lib/new-palette.bmp', data, function(err) {
    if (err) throw err;
  });
});
