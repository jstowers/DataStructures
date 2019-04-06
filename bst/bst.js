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


// Constructor function
function BST(value) {
	this.value = value;
	this.left = null;
	this.right = null;
}

// Insert method
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

// Contains method
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

/*
	BST Traversal

	1.  Min

			- How do we find the smallest key in the table?

			- Move left of the root until we find a node
			with a null key

	2.  Max

			- How about the largest key?

			- Move right of the root until we find a null key

	3.	Floor

			- How do we find the largest key <= a given key?

	4.	Ceiling

			- How do we find the smallest key >= a given key?

*/

// Depth First Traversal

/*
	Description
	-	Travel through all the nodes in BST and run 
	the iterator callback function on each node.  

	-	Start at top node and follow each node all the
	way to the bottom, before moving up to the next branch.

	- 	In order version => will run iterator function on each
	node, going from smallest to largest

			Left child node -> Parent node -> Right child node

			Will use recursive call to iterator function
*/

// In Order Traversal - smallest to largest
BST.prototype.depthFirstTraversal = function(iteratorFunc) {

	// console.log('this = ', this);

	// left child
	if(this.left) {
		this.left.depthFirstTraversal(iteratorFunc);
	}

	// current node value
	iteratorFunc(this.value);

	// right child
	if(this.right) {
		this.right.depthFirstTraversal(iteratorFunc);
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


console.log('bst =', bst);

console.log(bst.right.left.left);

console.log(bst.left.right.left);

console.log(bst.right.right);

console.log('85: ', bst.contains(85));

console.log('69: ', bst.contains(69));


// Basic callback function
function log(value) {
	console.log(value);
}


// Depth first traversal
bst.depthFirstTraversal(log);


// Determine minimum value of BST
function minVal(root) {

	if (root.left === null) {
		return root.value;
	}

	return minVal(root.left);
}


// Determine maximum value of BST
function maxVal(root) {

	if (root.right === null) {
		return root.value;
	}

	return maxVal(root.right);
}


console.log('minVal = ', minVal(bst))
console.log('maxVal = ', maxVal(bst))
