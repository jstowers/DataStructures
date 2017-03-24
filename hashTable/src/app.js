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


let myHT = new HashTable(30);
console.log('myHT =', myHT);


let watchList = [

	{
		key: 'Breitling',
		model: 'Navitimer',
		price: 6975
	},
	{
		key: 'Hublot',
		model: 'Big Bang',
		price: 7895
	},
	{
		key: 'Patek Philippe',
		model: 'Aquanaut',
		price: 31790
	},
	{
		key: 'Rolex',
		model: 'Datejust',
		price: 10490
	}
];


