# Queue with Linked List Implementation

For the linked list, two pointers, a head and tail, are maintained.  These pointers allow an item to be added to the tail (enqueue) or removed from the head (dequeue).

The time complexity for adding (enqueuing) or removing (dequeuing) an item is constant, O(1), because an item is enqueued or dequeued in a discrete sequence of steps.  No looping through the linked list is needed.


## API

FIFO = First In, First Out

head = pointer to the first item added to the queue
tail = pointer to the last item added to the queue

	1.	Create an empty queue

	2.	enqueue(value) => insert a new item at the tail of the queue

	3.	dequeue() => remove and return the item at the head of the queue

	4.	contains(value) => return T/F if queue contains value

	5.	isEmpty() => returns T/F if queue empty

	6.	size() => returns the number of items in the queue


## Running the App

	1. In the console, type the following command:

		$ node app.js


	2.	The string variable is used to create the queue.  To test the 
	functionality, the '-' mark represents a call to dequeue().

	3.	You can change string and test the queue functionality yourself.

	4.  You can also implement stringFile.txt from the comma


## To Do

- [ ] Determine how to feed a command line argument (stringFile.txt) into
Mocha so that it can be tested.