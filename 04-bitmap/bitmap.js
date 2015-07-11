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
  fs.readFile('non-palette-bitmap.bmp', function(err, data) {
    if (err) throw err;
    var fileType = data.toString('ascii', 0, 2);
    console.log(fileType);
    console.log(data.readUInt32LE(58 + 40));
    ee.emit('convertFile', data);
  });
});

ee.emit('readFile');

// 2. convert buffer into a Javascript Object - TODO

ee.on('convertFile', function(data) {

  // var json = JSON.stringify(data);
  // var parsed = JSON.parse(json);
  // var headers = parsed.data.splice(0, 54);
  // var imageData = parsed.data.splice(53);
  // ee.emit('transform', headers, imageData);


  //console.log(headers+ " MORE STUFF COMING!\n");
  // console.log('THIS BEGINS THE IMAGE DATA\n' + imageData);
});

// 3. Run a transform on that Javascript Object. - TODO

ee.on('transform', function(headers, imageData) {
  var headers = headers;
  var reversedImage = imageData.reverse();

  // console.log(reversedImage);
  ee.emit('convertToBuffer', headers, reversedImage);
});

// 4. Turn the transformed object back into a buffer. - TODO

ee.on('convertToBuffer', function(headers, reversedImage) {
  // Convert data back to buffer
  console.log("I made it!");
});

// 5. Write that buffer to a new file.


