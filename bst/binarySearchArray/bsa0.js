// Binary Search Array
// March 17, 2017


/*
	Given:
		1. a sorted array, and
		2. a target value.

	Use binary search to return the index of the target value
	or -1 if the target value does not exist in the array.



	Psued

	1.	Determine length of array

			length = array.length

	2.	Set starting index as midpoint of array (iStart)

		- if length is even, set starting point at length - length/2

			index = 4 - 4/2 = 2

			then subtract 1 since array indices begin at 0

			iStart = 2 - 1 = iMin + 1

		- if length is odd, set starting point at length/2

			index = 5/2 = 2.5 

			round up to near integer = 3

			then subtract 1 since array indices begin at 0

			iStart = 3 - 1 = iMin + 2

	3.	Determine currValue at array[iStart]

			currValue = array[iStart]

	4.	Is currValue = target?

		YES: return iStart

		NO:

	4.	Is currValue < or > target value?

			if < target => new array length = iStart - 1

				iMin = 0,

				iMax = iStart

				new array = [0, iStart-1]

			if currValue > target

				iMin = iStart

				iMax = array.length - 1

				new array length = [iStart+1, iMax]

	5.	Make recursive call

			recursive(array, target, iMin, iMax)

*/


function binarySearch (array, target) {

	function recursive(array, target, iMin, iMax) {

		console.log('array =', array, "  target =", target);

		// determine array length
		let length = array.length;
		//console.log('array length = ', length);

		// Base Cases to Stop Recursion
		// if length = 0 and value does not equal target, return -1
		if(length === 1 && array[0] !== target) {
			return -1;
		}
		else if (length === 1 && array[0] === target) {
			return iMax;
		}
		
		// determine array midpoint
		if(length%2 === 0){
			iStart = length - length/2 - 1;
		} else {
			iStart = Math.ceil(length/2) - 1;
		}

		let currVal = array[iStart];
		console.log('iMin = ', iMin, ' iStart = ', iStart, "  iMax =", iMax);

		if (currVal === target) {
			return iMin + iStart;
		}
		
		else if (currVal > target) {
			console.log('currVal ' + currVal + '  > target ' + target)
			iMin = iMin;
			iMax = iMax-1;
			array = array.slice(iMin, iStart);

		} else {
			console.log('currVal ' + currVal + '  < target ' + target)
			iMin = iStart + 1;
			iMax = iMax;
			array = array.slice(iStart+1);
		}

		//console.log('array = ', array);
		console.log('iMin = ', iMin, "iMax = ", iMax);
		console.log('************************');

		return recursive(array, target, iMin, iMax);

	}

	let result = recursive(array, target, 0, array.length-1);

	console.log('result =', result);

	return result;

}

console.log('-------------------------------');
console.log(binarySearch([4],5)); // WORKS!

console.log('-------------------------------');
console.log(binarySearch([5],5)); // WORKS!

console.log('-------------------------------');
console.log(binarySearch([11, 12, 13, 15, 16], 12)); // WORKS!!


console.log('-------------------------------');
console.log(binarySearch([1, 22, 33, 45, 53, 62], 45));

console.log('-------------------------------');
console.log(binarySearch([11, 12, 13, 14, 15], 12));

/*
console.log(binarySearch([2,5,7], 1));

console.log('-------------------------------');

console.log(binarySearch([11, 12, 13, 15, 16], 12));

console.log('-------------------------------');

console.log(binarySearch([3, 9, 10, 12], 12));

console.log('-------------------------------');

console.log(binarySearch([5, 6, 9, 10, 11, 12], 12));

console.log('-------------------------------');

console.log(binarySearch([0, 2, 5, 6, 9, 10, 11, 12, 45, 800, 1000], 45));
*/

