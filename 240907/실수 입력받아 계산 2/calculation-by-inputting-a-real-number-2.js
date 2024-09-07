const fs = require( 'fs' )

let input = Number( fs.readFileSync(0).toString() )

let sum = input + 1.5

console.log( sum.toFixed(2) )