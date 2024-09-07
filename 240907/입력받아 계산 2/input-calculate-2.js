const fs = require("fs");

let string = fs.readFileSync(0).toString();

let split = string.split( ' ' );

console.log( split[0]*split[1] )