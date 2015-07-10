// For this assignment you will be building a Bitmap reader and transformer.
// It will read a Bitmap in from disk, run one or more color transforms on
// the bitmap and then write it out to a new file. This project will require
// the use of node buffers in order to manipulate binary data. Your project
// should include tests, as well as a Gruntfile and package.json file. Make
// sure to run all your code through jshint and jscs. The process will look
// something like this:

var fs = require('fs');

var EventEmitter = require('events').EventEmitter;
var ee = new EventEmitter();

// 1. open file using fs and read it into a buffer

ee.on('readFile', function() {
  fs.readFile('palette-bitmap.bmp', function(err, data) {
    if (err) throw err;
    ee.emit('convertFile', data);
    console.log(data);
  });
});

ee.emit('readFile');

// 2. convert buffer into a Javascript Object

ee.on('convertFile', function(buf) {
  var json = JSON.stringify(buf);

  console.log(json);
});

// 3. Run a transform on that Javascript Object.

// 4. Turn the transformed object back into a buffer.

// 5. Write that buffer to a new file.


