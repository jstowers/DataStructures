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
}

module.exports = { Node, LinkedList };
