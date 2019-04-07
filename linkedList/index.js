// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        // create a new Node, with its next property referencing the existing node
        // then re-assign the Linked List head to point to the new node

        // const node = new Node(data, this.head);
        // this.head = node;
        this.head = new Node(data, this.head);
    }

    size() {
        let count = 0;

        function recursive(node) {
            if(node === null) {
                return count;
            }
            count += 1;
            return recursive(node.next);
        }

        return recursive(this.head);
    }

    // alternative solution using while loop
    /*
        size() {
            let count = 0;
            let node = this.head;
            
            while(node) {
                counter++;
                node = node.next;
            }

            return counter;
        }
    */

    getFirst() {
        return this.head;
    }

    getLast() {
        let node = this.head;

        if (!node) {
            return null;
        }

        function recursive(node) {
            if(!node.next) {
                return node;
            }
            return recursive(node.next);
        }

        return recursive(node);
    }

    clear() {
        this.head = null;
    }

    // head reference will point to the second node, not the first one
    removeFirst() {
        let node = this.head;
        if(!node) {
            return;
        }
        this.head = node.next;
    }

    // removeLast() has two edge cases:
    // 1. empty linked list
    // 2. a linked list of size 1

    removeLast() {
        let node = this.head;

        // empty list or list with only 1 node
        if(!node || !node.next) {
            this.head = null;
            return;
        }

        function recursive(previous, current) {
            
            if (!current.next) {
                previous.next = null;
                return;
            }
            recursive(current, current.next);
        }

        recursive(node, node.next);
    }

    // alternative solution
    /*
        removeLast() {
            if(!this.head) {
                return;
            }

            if(!this.head.next) {
                this.head = null;
                return;
            }

            let previous = this.head;
            let node = this.head.next;

            while(node.next) {
                previous = node;
                node = node.next;
            }
            previous.next = null;
        }
    */

    insertLast(data) {
        let last = this.getLast();

        if(last) {
            last.next = new Node(data);
        } else {
            this.head = new Node(data);
        }
    }

    // alternative solution
    /*
        insertLast(data) {
            let lastNode = new Node(data);

            let node = this.head;

            function recursive(node) {
                if(node.next === null) {
                    node.next = lastNode;
                    return;
                }
                recursive(node.next);
            }

            recursive(node);
        }
    */

    getAt(index) {
        let counter = 0;

        function recursive(node) {
            if (!node) {
                return null;
            } else if(counter === index) {
                return node;
            } else {
                counter += 1;
                return recursive(node.next);
            }
        }
        return recursive(this.head);
    }

    removeAt(index) {

        // empty list
        if (!this.head) {
            return;
        }

        // remove head node
        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        let previous = this.getAt(index - 1);
        let indexedNode = this.getAt(index);
 
        if(previous && indexedNode && indexedNode.next) {
            previous.next = indexedNode.next;
        }
        else previous.next = null;
    }

    // alternative solution using recursion
    /*
        removeAt(index) {
            let node = this.head;
            let counter = 0;

            // empty list
            if(!node) {
                return;
            }

            // remove 1st node
            if(index === 0) {
                this.head = node.next;
            }

            function recursive(previous, current) {
                if(!current) {
                    return;
                }
                else {
                    counter += 1;
                    if (index === counter) {
                        previous.next = current.next;
                    }
                }
                return recursive(current, current.next);
            }
            recursive(node, node.next);
        }
    */

    insertAt(data, index) {

        // empty list
        if (!this.head) {
            this.head = new Node(data);
            return;
        }

        let previous = this.getAt(index - 1);
        let indexedNode = this.getAt(index);

        // insert node at beginning of list
        if(index === 0) {
            this.head = new Node(data, indexedNode);
            return;
        }
 
        // insert node in middle of list
        if(previous && indexedNode) {
            previous.next = new Node(data, indexedNode);
            return;
        }
        
        // insert node at end of list
        this.getLast().next = new Node(data);
    }

    // calls the provided function with every node in the chain
    forEach(func) {

        function recursive(node) {
            if (!node) {
                return;
            }
            func(node);
            recursive(node.next);
        }

        return recursive(this.head);
    }

    // generator function with key Symbol.iterator
    *[Symbol.iterator]() {
        let node = this.head;
        while(node) {
            yield node;
            node = node.next;
        }
    }
}

module.exports = { Node, LinkedList };
