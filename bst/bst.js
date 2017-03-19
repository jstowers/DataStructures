// Binary Search Tree
// March 19, 2017

/*
 	Tree Shape
	
		- Many different BST's can be made from the same set of keys
	
		- Tree shape depends on order of insertion of keys

		- Can develop algorithms to control insertion


	Performance

		- Best => perfectly balanced

		- Typical => slightly off-balance, either left or right

		- Worst => linear order with no branches; no benefit
		of tree shape; same as a linked list


	Mathematical Analysis

	If N distinct keys are inserted into a BST in random order:

	1.	Average

			# compares for search/insert = ~2*ln(N)

	2.	Worst (height of tree)

			# compares for search/insert = ~4.311*ln(N)

	3.	Absolute Worst Case

			If keys come in certain random orders

			# compares for search/insert (time) = ~ N

	Source:  How Tall is a Tree? Bruce Reed, CNRIS, Paris, France
*/


// constructor function
function BST(value) {
	this.value = value;
	this.left = null;
	this.right = null;
}

// insert method
// 1. take in a value
// 2. make a new BST with that value (node)
// 3. place node into original BST in correct location
// cost:  number of compares = 1 + depth of node
BST.prototype.insert = function(value) {

	// value <= current node:  move to the left
	// Is there a left child?
	//	 NO => create new BST for left child with value
	//	 YES => call insert() again, passing in the value
	if (value <= this.value) {
		if (!this.left) {
			this.left = new BST(value);
		} else {
			this.left.insert(value);
		}

	// value > current node:  move to the right
	} else if (value > this.value) {
		if(!this.right) {
			this.right = new BST(value);
		} else {
			this.right.insert(value);
		}
	}
};

// contains method
// cost:  number of compares = 1 + depth of node
BST.prototype.contains = function(value) {

	console.log('this.value =', this.value);

	// Does value = node.value we are acting on?
	if (value === this.value) {
		return true;
	} 
	else if (value < this.value) {
	// Is there a left child?
		// NO
		if(!this.left) {
			return false;
		// YES
		} else {
			return this.left.contains(value);
		}
	}
	else if (value > this.value) {
	// Is there a right child?
		// NO
		if(!this.right) {
			return false;
		} else {
			return this.right.contains(value);
		}
	}
}


var bst = new BST(50);
bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);

/*
console.log('bst =', bst);

console.log(bst.right.left.left);

console.log(bst.left.right.left);

console.log(bst.right.right);
*/

console.log('85: ', bst.contains(85));

console.log('69: ', bst.contains(69));



















