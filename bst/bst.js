// Binary Search Array
// March 17, 2017


/*
	Given a sorted array and a target value.

	Use binary search to return the index of the target value
	or -1 if the target value does not exist in the array.


	1.	Determine length of array

	2.	Determine starting point

		- if length is even, set starting point at length - length/2

			index = 4 - 4/2 = 2

			then subtract 1 since array indices begin at 0

			iStart = 1

		- if length is odd, set starting point at length/2

			index = 5/2 = 2.5 rounded up to 3

			iStart = 2

	3.	Is value at array[iStart] === target?

		YES: return iStart

		NO:

	4.	Is value at array[iStart] < or > target value?

			if < target => new array length = iStart - 1

			if > target => new array length = array.length - iStart

*/


function binarySearch (array, target) {

	// determine array length
	let length = array.length


	// base case to end recursion
	// if length = 0 and value does not equal target, return -1
	if(length === 1 && array[0] !== target) {

		return -1;

	}

	// determine starting index
	let iStart;
	let iFinal;

	if(length%2 === 0){
		//console.log('Even array');
		iStart = length - length/2 - 1;
		index = index + iStart;
	} else {
		//console.log('Odd array');
		iStart = Math.ceil(length/2) - 1;
	}





	console.log('array[iStart] =', array[iStart], ' target =', target);

	// determine if array[iStart] = target
	if (array[iStart] === target) {
		return iStart;
	}

	else if (array[iStart] > target) {

		let newArray = array.slice(0, iStart);
		console.log('newArray > =', newArray);


	} else {

		let newArray = array.slice(iStart+1);
		console.log('newArray < =', newArray);
	}

}

console.log(binarySearch([5],5)); // WORKS!

console.log(binarySearch([4],5)); // WORKS!

console.log(binarySearch([11, 12, 13, 15, 16], 11));

console.log(binarySearch([3, 9, 10, 12], 3));

console.log(binarySearch([5, 6, 9, 10, 11, 12], 12));

