#Binary Search Tree#

Provide efficient implementation of symbol table algorithms.

###Definition:  A BST is a binary tree in symmetric order.

1.  Binary Tree

    - Explicit data structure

    - Contains nodes connected by links

    - A node
        - Contains information
        - Has two links: a left tree and a right tree

    - Links can be null

    - Every node is a 'root' of a subtree

    - Nodes below the 'root' are called 'children' of that root

2.  Symmetric Order

    - Each node has a key

    - The key is > than all keys on the left subtree

    - The key is < than all keys on the right subtree

###BST Representation in JavaScript

BST is a reference to a root Node

A Node is comprised of four fields:

    1.  Key
    2.  Value
    3.  Reference to left subtree (smaller keys)
    4.  Reference to right subtree (larger keys)

Operations

    1.  Get - return key (if in BST) and corresponding value

    2.  If search for key reaches a null link, then key doesn't exist in BST

    3.  Insert - if get to null link and not found, just put the key there

