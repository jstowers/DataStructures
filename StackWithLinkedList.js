// Stack with Linked List Implementation
// January 8, 2019

// Require file system module
let fs = require('fs');

// Synchronous call to read stringFile
let string = fs.readFileSync(process.argv[2], 'utf-8');

// 


console.log('strToArr =', string.split());
console.log('string.length =', string.length);


while( string.length > 0 ) {

	// if string[0] = '-', pop string from stack and print


	// otherwise, push string[0] onto stack


	// string.slice()


}