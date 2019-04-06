// Binary Search Array
// March 19, 2017

function binarySearch (array, target) {

	let valMid;

	console.log('array =', array, '  target =', target);

	function recursive(array, target, iMin, iMax) {

		// base case to stop recursion
		// target value does not exist in array
		if (iMax < iMin) {
			return -1;
		}
		else if (iMin === iMax && array[iMin] !== target){
			return -1;
		}
		
		// calculate midpoint index
		iMid = iMin + (Math.floor((iMax - iMin)/2));

		// determine midpoint value
		valMid = array[iMid];

		console.log('iMin = ', iMin, '  iMid =', iMid, '  iMax =', iMax);

		// tests for target value
		if(valMid > target) {
			iMin = iMin;
			iMax = iMid;
		} else if (valMid < target) {
			iMin = iMid+1;
			iMax = iMax;
		} else if (valMid === target) {
			return iMid;
		}

		return recursive(array, target, iMin, iMax)
	}

	// initial recursive call
	let result = recursive(array, target, 0, array.length-1);

	return result;
}

console.log('--------------------');
console.log('index = ', binarySearch([4],5)); // WORKS!

console.log('--------------------');
console.log('index = ', binarySearch([5],5)); // WORKS!

console.log('--------------------');
console.log('index = ', binarySearch([5],4)); // WORKS!

console.log('--------------------');
console.log('index = ', binarySearch([11, 12], 11)); // WORKS!

console.log('--------------------');
console.log('index = ', binarySearch([11, 12], 12)); // WORKS!

console.log('--------------------');
console.log('index = ', binarySearch([1, 22, 33, 45, 53, 62], 62)); // WORKS!

console.log('--------------------');
console.log('index = ', binarySearch([11, 12, 13, 14, 15], 100)); // WORKS!

console.log('--------------------');
console.log('index = ', binarySearch([11, 12, 13, 14, 15], 7)); // WORKS!

console.log('--------------------');
console.log('index = ', binarySearch([11, 12, 13, 14, 15], 12)); // WORKS!

console.log('--------------------');
console.log('index = ', binarySearch([11, 12, 13, 14, 15], 11)); // WORKS!

console.log('--------------------');
console.log('index = ', binarySearch([1, 2], 2));

console.log('--------------------');
console.log('index = ', binarySearch([1, 2], 1));

console.log('--------------------');
console.log('index = ', binarySearch([0, 1, 2], 0));