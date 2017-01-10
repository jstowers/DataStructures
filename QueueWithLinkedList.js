// Joseph Stowers
// Queue with Linked List Implementation
// January 10, 2017

//  Queue API
/*
	FIFO = First In, First Out

	head = pointer to the first item added to the queue
	tail = pointer to the last item added to the queue

	1.	Create an empty queue

	2.	enqueue(value) => insert a new item at the tail of the queue

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
		this.tail = this.head;
		this.N = 0;
	}

};

LinkedList.prototype.enqueue = function(value) {

	// save a link to the old tail
	let oldtail = this.tail;

	// create a new tail with the current value
	this.tail = new Node(value);

	// if queue is empty, set head equal to tail
	if (this.isEmpty()){
		this.head = this.tail;
	} else {
		oldtail.next = this.tail;
	}

	// increment the size of the queue
	this.N += 1;

	console.log('this after enqueue ', this)

};

LinkedList.prototype.dequeue = function() {

	let item = this.head.value;

	// if head and tail values are equal, then
	// dequeuing the last node in the list.
	// therefore, reset head and tail values to null
	if(this.head.value === this.tail.value){
		this.head.value = null;
		this.tail.value = null;
	}
	// move the head pointer to next
	else {
		this.head = this.head.next;
	}

	// decrement the size of the queue
	this.N -= 1;

	console.log('this after dequeue ', this)

	return item;

};

LinkedList.prototype.isEmpty = function() {

	return this.head.value === null && this.head.next === null;

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

// Loop through string array and test queue functionality
while( strToArr.length > 0 ) {

	// if string = '-', dequeue string from queue and output
	if (strToArr[0] === '-') {
		queue.dequeue();
	}

	// enqueue string onto tail of queue
	else {
		queue.enqueue(strToArr[0]);
	}

	// string.slice()
	strToArr = strToArr.slice(1)

}








