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

7. __removeLast()__ - removes the last node

8. __insertLast(data)__ - inserts a new node at the end of the list

9. __getAt(index)__ - return node at a given index

10. __forEach(func)__ - calls the provided function with every node in the list

---

### Using Generators to Iterate Through Linked Lists

+ Generators are used to control the execution timing of iterators

+ the __'*'__ in the function definition indicates a generator

+ _'yield'_ returns a value only once; the next time the generator is called, execution will resume from that yield point

+ the return value is a generator __object__

```javascript
function *numbers() {
    const result = 1 + 1;
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
    when .next is called again, the value in the argument will be passed into the yield statement, 
    and the generator will return the function value
    => { value: 35, done: true }
*/

```