const fs = require('fs');

// Assuming the file path is passed as the first command line argument
const filePath = process.argv[2];

try {
  // Read the file synchronously with UTF-8 encoding
  const contents = fs.readFileSync(filePath, 'utf8');
  
  // Count the number of newlines
  const numNewlines = contents.split('\n').length - 1;
  
  // Print the number of newlines to stdout
  console.log(numNewlines);
} catch (error) {
  console.error(`Error reading file: ${error.message}`);
}
