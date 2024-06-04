let sum = 0;

// Loop through command-line arguments starting from index 2
for (let i = 2; i < process.argv.length; i++) {
  // Convert each argument to a number and add it to the sum
  sum += Number(process.argv[i]);
}

// Print the sum to the console
console.log(sum);


////node babystep.js 1 2 3 // will output 6