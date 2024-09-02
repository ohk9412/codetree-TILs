const fs = require( 'fs' );

let n = Number(fs.readFileSync(0).toString());

console.log( Math.round( n*100 )/ 100 )