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

1. __insertFirst(data)__ - inserts a new node into the list

2. __size()__ - returns a count of all nodes

3. __getFirst()__ - returns the first node

4. __getLast()__ - returns the last node

5. __clear()__ - deletes all nodes

6. __removeFirst()__ - removes the first node