'use strict';
const fs = require('fs');

// Ensure the file path is provided as the first command line argument
const file = process.argv[2];

if (!file) {
  console.error('Please provide a file path as the first argument.');
  return;
}

fs.readFile(file, 'utf8', function (err, contents) {
  if (err) {
    return console.error(err);
  }
  // Now that contents is a string, split by '\n' and count the lines
  const lines = contents.split('\n').length - 1;
  console.log(lines);
});
