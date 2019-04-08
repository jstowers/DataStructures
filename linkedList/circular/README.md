# Circular Linked Lists

## Introduction

+ Circular Linked Lists arise when __no tail node__ is found, meaning there is no node where .next = null.

+ This can cause big problems because many linked list methods use logic testing for null tail nodes.  And if no tail exists, these methods enter an infinite loop.

### Algorithm

1.  To identify a circular linked list, use two separate pointers, __Slow and Fast__, to iterate through the linked list at different speeds.
    
    + Both slow and fast start at the first node (head)
    + Fast advances two nodes
    + Slow advances one node 
   
2.  If Fast passes two defined nodes, then enter while loop:
    + Fast advances two nodes
    + Slow advances one node

3. Are Slow and Fast pointing at the same node (===)?

    + if no, continue iterating, until Fast finds a null value => return false, OR

    + if yes . . . then we have a circular linked list => return true

### Google Coding Interview Problem

If given a circular linked list, design an algorithm to remove every other node.

