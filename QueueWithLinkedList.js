// Joseph Stowers
// Queue with Linked List Implementation
// January 9, 2017

//  Queue API
/*
	FIFO = First In, First Out

	1.	Create an empty queue

	2.	enqueue(value) => insert a new item at the end of the queue

	3.	dequeue() => remove and return the item at the head of the queue

	4.	isEmpty() => returns T/F if queue empty

	5.	size() => returns the number of items in the queue
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
		this.tail = this.head;
		this.N = 1;
	} else {
		this.head = Node(null);
		this.tail = Node(null);
		this.N = 0;
	}

};

LinkedList.prototype.enqueue = function(value) {

	// save a link to the old tail
	let oldtail = this.tail;

	// create a new tail with the current value
	this.tail = new Node(value);

	// assign oldtail to next
	this.tail.next = oldtail;

	// increment the size of the queue
	this.N += 1;

};

LinkedList.prototype.dequeue = function() {

	let item = this.head.value;

	// move the head pointer to next
	this.head = this.head.next;

	// decrement the size of the stack
	this.N -= 1;

	return item;

};

LinkedList.prototype.isEmpty = function() {

	return this.head.value === null;

};

LinkedList.prototype.size = function() {

	return this.N;
}

// CLIENT

// Require file system module
let fs = require('fs');

// Synchronous call to read string file
let string = fs.readFileSync(process.argv[2], 'utf-8');

// Split string into array
let strToArr = string.split(" ");

// Create a queue with linked list implementation
let queue = new LinkedList();

// Loop through string array and test stack functionality
while( strToArr.length > 0 ) {

	// if strToArr[0] = '-', pop string from stack and output
	if (strToArr[0] === '-') {
		let output = queue.dequeue();
		console.log('output =', output);
		console.log('size = ', queue.size());
	}

	// otherwise, push strToArr[0] onto end of queue
	else {
		queue.enqueue(strToArr[0]);
	}

	// string.slice()
	strToArr = strToArr.slice(1)

}








