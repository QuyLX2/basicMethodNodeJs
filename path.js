const path = require('path');
// path help to combine

const fileLocation = path.join(__dirname, 'app.js');
console.log(fileLocation);

const fileName = path.basename(fileLocation)
// method of path

console.log(fileName);