# Circular Linked Lists

## Introduction

+ Circular Linked Lists arise when __no tail node__ is found, meaning there is no node where .next = null.

+ This can cause big problems because many linked list methods use logic testing for null tail nodes.  And if no tail exists, these methods enter an infinite loop.

### Algorithm

1.  To identify a circular linked list, we will use two separate pointers, slow and fast, to iterate through the linked list at different speeds.
    
    + Slow looks at first node
    + Fast looks at next node

2.  If next two nodes after Fast are defined, then enter into for loop:
    + Inside for loop:
        + most Fast forward by two nodes
        + move Slow forward by one node

3. are Slow and Fast looking at the same node (===)?

    + if no, continue iterating, until fast finds a null value => return false

    + if yes . . . then we have a circular linked list => return true