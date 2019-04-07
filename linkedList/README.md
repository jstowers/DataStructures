# Linked List

## Introduction
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

## Classes and Methods

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

7. __removeLast()__ - removes the last node

8. __insertLast(data)__ - inserts a new node at the end of the list

9. __getAt(index)__ - returns node at a given index

10. __removeAt(index)__ - removes node at a given index

11. __insertAt(index)__ - inserts a new node at a given index

12. __forEach(func)__ - calls the provided function on every node in the list

13. __for...of__ - uses a generator to loop through each node in the list

---

## An Introduction to Generators

### Background
+ Generators control the execution timing of iterators.

+ The __'*'__ in the function definition indicates a generator.

+ The return value is a generator __object__.

+ __'yield'__ returns a value only once; the next time the generator is called, execution will resume from that yield point.

### A Simple Example

```javascript
function *numbers() {
    const result = 1 + 2;
    return 20 + (yield result);
}

const generator = numbers();  // returns a generator object => Object [Generator] {}

generator.next(); 
/* 
    when .next is called the first time, the code will execute inside the generator up to the yield 
    statement; there, execution is paused and the result from the yield statement will be returned
    => { value: 3, done: false }
*/

generator.next(15);
/*
    when .next is called again, the value in the argument (15) will be passed into the yield statement, 
    and the generator will complete execution and return the final value
    => { value: 35, done: true }
*/

```

### Using Generators to Create a Tree Class

+ Create a function to iterate depth-first through a Tree and collect the values of each node

``` 
        1
    ---------
    |   |   |
    2   3   4
    |     ----- 
    5     6   7
          |
          8
```

+ Expected result => [1, 2, 5, 3, 4, 6, 8, 7]

```javascript
class Tree {
    constructor(value = null, children = []) {
        this.value = value;
        this.children = children;
    }

    *printValue() {
        console.log('this.value =', this.value);
        yield this.value;
        for(let child of this.children) {
            // delegate to another children
            // walk through that node's children and print values
            yield* child.printValue();
        }
    }
}

const tree = new Tree(1, [
    new Tree(2, [new Tree(5)]),
    new Tree(3),
    new Tree(4, [new Tree(6, [new Tree(8)]), new Tree(7)])
]);

const values = [];
for (let value of tree.printValue()) {
    values.push(value);
}
console.log('values =', values);
```

### Linked Lists with Generators

+ Using a for...of loop, we can iterate through each node of a linked list.

+ Set up a generator function