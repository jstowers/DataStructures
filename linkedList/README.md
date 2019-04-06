# Linked List

## Definition
+ Ordered collection of data built from nodes.

+ A __Node__ contains two key pieces of information:
    - Data - string, number, array, object, etc.
    - Reference - a pointer linking to the next node in the chain

+ The order of nodes in a linked list is constant, unless changed by you.

### Special Nodes
+ __Head__ - first node of linked list
+ __Tail__ - last node; contains no reference to another node (null)

### What is a Reference?

```javascript
    const nodeOne = {
        data: 123,
    }

    const nodeTwo = {
        data: 456,
    }

    // link the two nodes together using the next property:
    nodeOne.next = nodeTwo;

    console.log('nodeOne =', nodeOne);
    // nodeOne = { data: 123, next: { data: 456 } }

    console.log('nodeTwo =', nodeTwo);
    // nodeTwo = { data: 456 }
```
