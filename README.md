# DataStructures
Data Structures &amp; Algorithms

## Stack with Linked List Implementation
### Monday, January 9, 2017

This program creates a stack data structure by implementing a linked list.

A stack is a data structure based on the LIFO algorithm => Last In, First Out.

This means that the last item added (pushed) to the stack is the first item
removed (popped).


## Queue with Linked List Implementation
### Tuesday, January 10, 2017

This program creates a queue data structure by implementing a linked list.

A queue is a data structure based on the FIFO algorithm => First In, First Out.  
This means that the first item added (enqueued) to the queue will be the first 
item removed (dequeued).


## Hash Table
### Monday, February 6, 2017




## Modular Programming

The programs implemented in this repository utilize modular programming techniques.

In creating modules, the client (program) is separated from the implementation (linked list) by an interface.

	Client ---- Interface ---- Implementation

The interface specifies the data types and basic operations
the program will use to create the queue.  The client will not have
access to the implementation details.  Nor will the implementation have
access to the client details.

This separation allows for modular, reusable libraries and efficient, reliable
testing.