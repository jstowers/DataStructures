# Linked List

## Definition
+ Ordered collection of data built from _nodes_.

+ A __Node__ contains two key pieces of information:
    - Data - string, number, array, object, etc.
    - Reference - a pointer linking to the next node in the list

+ Unless you change them, the order of nodes is constant.

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

### Node Class

```javascript
    class Node {
        constructor(data, next = null) {
            this.data = data;
            this.next = next;
        }
    }
```


### Linked List Class

``` javascript
    class LinkedList {
        constructor() {
            this.head = null;
        }

        // methods shown below
    }
```


### Linked List Methods

1. insertFirst(data)

    + create a new Node with the data

    + if Linked List head !== null, then assign head to new Node's next reference

    + then point head to new Node

2. size()

3. getFirst()

4. getLast()