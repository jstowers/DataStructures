//  Joseph Stowers
//  Hash Table
//  March 23, 2017

// Constructor Functions
function HashTable(size) {

	this.buckets = Array(size);
	this.numBuckets = this.buckets.length;
}


function HashNode(key, value, next) {
	this.key = key;
	this.value = value;
	this.next = next || null;
}

// Hash Method
// Takes in a string, here the key, and hashes it
// into a number that corresponds to an index (or bucket).
// Later on, we will put the node values into the bucket.

HashTable.prototype.hash = function(key) {

	let total = 0;

	for (let i = 0; i < key.length; i++) {
		total += key.charCodeAt(i);
	}

	// need to distribute into buckets
	// will get a remainder <= this.numBuckets
	let bucket = total % this.numBuckets

	return bucket;

}

// Insert Method
// Takes a key:value pair, changes them into a hash node, and then
// place this node into the correct bucket.
HashTable.prototype.insert = function(key, value) {

	// hash key to determine bucket to place new node
	let index = this.hash(key);

	// if bucket is empty, 
	// place new node in bucket
	if (!this.buckets[index]) {
		this.buckets[index] = new HashNode(key, value);
	}
	// check first node in bucket
	// will update information if already exists
	else if (this.buckets[index].key === key){
		this.buckets[index].value = value;
	}
	// if bucket is not empty,
	// travel through chain using while loop
	// and then attach the new node at the end
	else {
		let currentNode = this.buckets[index];

		while (currentNode.next) {

			// update an existing key:value pair
			// then stop method rest of method
			if (currentNode.next.key === key) {
				currentNode.next.value = value;
				return;
			}
			currentNode = currentNode.next;
		}

		currentNode.next = new HashNode(key, value);
	}
}


// Get Method
// Will take in a key and return its value
// Will return null if the key does not exist in the table.
HashTable.prototype.get = function(key) {

	let index = this.hash(key);

	if (!this.buckets[index]) {
		return null;
	} else {

		let currentNode = this.buckets[index];

		while(currentNode) {
			if (currentNode.key === key) {
				return currentNode.value;
			}
			currentNode = currentNode.next
		}

		return null;
	}
}


// Retrieve All Method
// Return an array of all hash nodes in our table
HashTable.prototype.retrieveAll = function() {

	let allNodes = [];
	let length = this.numBuckets;

	for (let i = 0; i < length; i++) {

		let currentNode = this.buckets[i];

		while (currentNode) {
			allNodes.push(currentNode);
			currentNode = currentNode.next
		}
	}
	return allNodes;
}



// Create new hash table
let myHT = new HashTable(30);
console.log('myHT =', myHT);

// Testing the hash method
console.log('Breitling hash = ', myHT.hash('Breitling'));
console.log('Hublot hash = ', myHT.hash('Hublot'));
console.log('Patek Philippe hash = ', myHT.hash('Patek Philippe'));
console.log('creamwove hash = ', myHT.hash('creamwove'));
console.log('quists = ', myHT.hash('quists'));

// Array of objects
let watchList = [
	{
		key: 'Breitling',
		value: {
			model: 'Navitimer',
			price: 6975
		}
	},
	{
		key: 'Hublot',
		value: {
			model: 'Big Bang',
			price: 7895
		}
	},
	{
		key: 'Patek Philippe',
		value: {
			model: 'Aquanaut',
			price: 31790
		}
	},
	{
		key: 'Rolex',
		value: {
			model: 'Datejust',
			price: 10490
		}
	},
	{
		key: 'Rolex',
		value: {
			model: 'Submariner',
			price: 6995
		}
	},
	{
		key: 'Patek Philippe',
		value: {
			model: 'Grand Complications',
			price: 729000

		}
	},
	{
		key: 'TAG Heuer',
		value: {
			model: 'Carrera HEUER 01',
			price: 6300
		}
	},
		{
		key: 'GAT Heuer',
		value: {
			model: 'Carrera Calibre',
			price: 6300
		}
	}
];

console.log('watchList = ', watchList)

// Testing the insert method
// myHT.insert(watchList[0]['key'], watchList[0]['value']);
// myHT.insert(watchList[1]['key'], watchList[1]['value']);

// Insert array of data { key:value } into a hash table
function insertHashNodes(hashTable, array) {

	array.forEach(ele => {
		hashTable.insert(ele['key'], ele['value'])
	});
}

insertHashNodes(myHT, watchList);
console.log('myHT =', myHT.buckets)

console.log('myHT get hublot =', myHT.get('Hublot'));
console.log('myHT get patek =', myHT.get('Patek Philippe'));

// Testing the retrieveAll method
console.log('retrieveAll = ', myHT.retrieveAll());




