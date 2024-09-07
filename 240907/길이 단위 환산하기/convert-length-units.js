const fs = require( 'fs' );

let input = Number(fs.readFileSync(0).toString());

let cm = Math.round( (input*30.48) * 10 ) / 10
console.log( cm.toFixed( 1 ) )