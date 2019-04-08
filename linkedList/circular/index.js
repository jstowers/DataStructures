// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
    // start at the head and iterate through a linked list

    // look at each node's next value

    // if no next null value is found, then a circular linked list exists
    let slow = list.getFirst();
    let fast = list.getFirst();

    while(fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;

        // not comparing data, because mulitple nodes could have the same data
        // are slow and fast the exact same node stored in memory
        if (slow === fast) {
            return true;
        }
    }

    return false;
}

module.exports = circular;
