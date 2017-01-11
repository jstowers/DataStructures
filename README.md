# DataStructures
Data Structures &amp; Algorithms

## Queue with Linked List Implementation
### Tuesday, January 10, 2017

This program creates a queue data structure by implementing a linked list.  
Two pointers, a head and tail, are maintained.  These pointers allow an item 
to be added to the tail (enqueue) or removed from the head (dequeue).

A queue is a FIFO algorithm => First In, First Out.  This means that the first
item added (enqueued) to the queue will be the first item removed (dequeued).
Contrast a queue with a stack, which is a LIFO algorithm => Last In, First Out.

For a queue, the time complexity for adding (enqueuing) or removing (dequeuing) an
item is constant, O(n), because an item is added to the head or removed from the
tail in a discrete sequence of steps.  No looping through the linked list is needed.

To run this program:

	1. In a console window, type the following command:

		$ node QueueWithLinkedList.js stringFile.txt

	2.	stringFile is a text file used to create the queue.  To test the 
	functionality, the '-' mark represents a call to dequeue().

	3.	You can change stringFile and test the queue functionality yourself.