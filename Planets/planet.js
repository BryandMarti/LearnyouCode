const fs = require('fs');

// Read planets from the text file, utf8 is used for better compatibility, Unicode transformation format is a good practice.
fs.readFile('planet.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  // Split the data by comma and trim each planet
  const planets = data.split(',').map(planet => planet.trim());

  // Print the planets to the console
  console.log('Planets in the solar system:');
  planets.forEach(planet => {
    console.log('-', planet);
  });
});
