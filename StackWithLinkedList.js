// Stack with Linked List Implementation
// January 8, 2017

//  Stack API
/*
	LIFO = Last In, First Out

	1.	Create an empty stack

	2.	Push(value) => insert a new value onto the stack

	3.	Pop() => remove and return most recently added value

	4.	isEmpty() => returns T/F if stack empty
*/


let Node =  function(value) {
	return {
		value: value,
		next: null
	}
}

let LinkedList = function(initialValue) {

	if (initialValue) {
		this.head = Node(initialValue);
	} else {
		this.head = Node(null);
	}
};

LinkedList.prototype.push = function(value) {

	// save a link to the old head
	let oldhead = this.head;

	// create a new head with the current value
	this.head = new Node(value);

	// assign oldhead to next
	this.head.next = oldhead;

};

LinkedList.prototype.pop = function() {

	let item = this.head.value;

	this.head = this.head.next;

	return item;

};

LinkedList.prototype.isEmpty = function() {



};



// Require file system module
let fs = require('fs');

// Synchronous call to read string file
let string = fs.readFileSync(process.argv[2], 'utf-8');

// Split string into array
let strToArr = string.split(" ");

// Create a stack with linked list implementation
let stack = new LinkedList();

// Loop through string array and test stack functionality
while( strToArr.length > 0 ) {

	// test stack functionality
	// if string[0] = '-', pop string from stack and print
	if (strToArr[0] === '-') {
		let output = stack.pop();
		console.log('output =', output);
	}

	// otherwise, push string[0] onto stack
	else {
		stack.push(strToArr[0]);
	}

	// string.slice()
	strToArr = strToArr.slice(1)

}








