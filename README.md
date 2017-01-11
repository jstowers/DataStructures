# DataStructures
Data Structures &amp; Algorithms

## Queue with Linked List Implementation
### Tuesday, January 10, 2017

This program creates a queue data structure by implementing a linked list.


*Queue Data Structure*

A queue is a data structure based on the FIFO algorithm => First In, First Out.  
This means that the first item added (enqueued) to the queue will be the first 
item removed (dequeued).

Contrast a queue with a stack, which is a LIFO algorithm => Last In, First Out.


*Modular Programming*

	Client ---- Interface ---- Implementation

The client (program) is separated from the implementation (linked list) by 
an interface.  This interface specifies the data types and basic operations
the program will use to create the queue.  The client will not have
access to the implementation details.  Nor will the implementation have
access to the client details.

This separation allows for modular, reusable libraries and efficient, reliable
testing.


*Linked List Implementation*

For the linked list, two pointers, a head and tail, are maintained.  These pointers 
allow an item to be added to the tail (enqueue) or removed from the head (dequeue).

The time complexity for adding (enqueuing) or removing (dequeuing) an item is constant, O(1), 
because an item is enqueued or dequeued in a discrete sequence of steps.  No looping through 
the linked list is needed.


*Run the Program*

	1. In a console window, type the following command:

		$ node QueueWithLinkedList.js stringFile.txt

	2.	stringFile is a text file used to create the queue.  To test the 
	functionality, the '-' mark represents a call to dequeue().

	3.	You can change stringFile and test the queue functionality yourself.