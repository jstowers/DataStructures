# DataStructures
Data Structures &amp; Algorithms

## Stack with Linked List Implementation
### Monday, January 9, 2017

This program implements a linked list to create a stack data structure.

A stack is a linear data structure based on the Last In, First Out ("LIFO") principle.  

LIFO means the last item added ("push") to the stack becomes the first item removed ("pop").


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
