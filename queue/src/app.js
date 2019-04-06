// Joseph Stowers
// Queue with Linked List Implementation
// January 12, 2017

//  Queue API
/*
	FIFO = First In, First Out

	head = pointer to the first item added to the queue
	tail = pointer to the last item added to the queue

	1.	Create an empty queue

	2.	enqueue(value) => insert a new item at the tail of the queue

	3.	dequeue() => remove and return the item at the head of the queue

	4.	contains(value) => return T/F if queue contains value

	5.	isEmpty() => returns T/F if queue empty

	6.	size() => returns the number of items in the queue
*/

let Node =  function(value) {
	return {
		value: value,
		next: null
	}
}

// Constructor
let LinkedList = function(initialValue) {

	if (initialValue) {
		this.head = Node(initialValue);
		this.tail = this.head;
		this.N = 1;
	} else {
		this.head = Node(null);
		this.tail = this.head;
		this.N = 0;
	}

};

LinkedList.prototype.enqueue = function(value) {

	// console.log('+++ ENQUEUE +++')

	// save a reference to the old tail
	let oldtail = this.tail;

	// create a new tail with the new value
	this.tail = new Node(value);

	// if queue is empty, set head pointer equal to tail pointer
	if (this.isEmpty()){
		this.head = this.tail;
	} else {
		// update link by pointing old tail to new tail
		oldtail.next = this.tail;
	}

	// increment the size of the queue
	this.N += 1;
};

LinkedList.prototype.dequeue = function() {

	// console.log('--- DEQUEUE ---')

	let item = this.head.value;

	// if head and tail values are equal, then
	// dequeuing the last node in the list.
	// Reset head and tail values to null
	if(this.head.value === this.tail.value){
		this.head.value = null;
		this.tail.value = null;
	} else {
		// update link by pointing head to next
		this.head = this.head.next;
	}

	// decrement the size of the queue
	this.N -= 1;

	// console.log('item dequeued =', item);
	// console.log('queue =', this);

	return item;

};

// Determines whether a node contains a certain value
LinkedList.prototype.contains = function(value) {
  
	function recurse(node){  
	    if(node === null){
	      return false;
	    }
	    else if (node.value === value){
	      return true
	    }
	    else {
	      // need to return up the call stack
	      return recurse(node.next)
	    }

	}
  
    return recurse(this.head);
}

// Determines whether the LinkedList is empty
LinkedList.prototype.isEmpty = function() {

	return this.head.value === null && this.head.next === null;

};

// Determines the size of the LinkedList
LinkedList.prototype.size = function() {

	return this.N;
}


// CLIENT SIDE PROGRAM

const Queue = {};

// Immediately Invoked Function Expression (IIFE)
Queue.makeQueue = function() {

	// Require file system module
	let fs = require('fs');

	// Synchronous call to read string file
	let string = fs.readFileSync(process.argv[2], 'utf-8');
	// let string = 'alpha beta gamma - - delta - epsilon - zeta eta - -';

	// Split string into array
	let strToArr = string.split(" ");

	// Create a queue with linked list implementation
	let queue = new LinkedList();

	// Loop through string array and test queue functionality
	while( strToArr.length > 0 ) {

		// if string element equals '-', dequeue string from queue and output
		if (strToArr[0] === '-') {
			queue.dequeue();
		}

		// enqueue string onto tail of queue
		else {
			queue.enqueue(strToArr[0]);
		}

		strToArr = strToArr.slice(1);
	}

	console.log('queue =', queue);
	return queue;
}();

module.exports = {
	Node: Node,
	LinkedList: LinkedList
}

